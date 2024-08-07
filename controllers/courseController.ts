import { Request, Response } from "express";
import {
  createCourseService,
  findSchoolCoursesService,
} from "../services/courseService";
import {
  connectionError,
  not_allowed,
  success_course_reg,
} from "../utils/messages";
import Course from "../models/Course";
import { findStaffIdService } from "../services/staffService";

const createCourseController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { faculty, dept } = req.query;
    const { courseTitle, courseCode, courseUnits, lectInCharge } = req.body;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    await createCourseService({
      school: staff.school,
      courseTitle,
      courseCode,
      courseUnits,
      lectInCharge,
      faculty,
      dept,
    });

    res.status(200).json({ message: success_course_reg });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolCoursesController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;

    // Pagination parameters
    const { page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const courses = await findSchoolCoursesService({
      school: staff.school,
    });

    totalRecords = await Course.countDocuments({ school: staff.school });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      courses,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createCourseController, findSchoolCoursesController };
