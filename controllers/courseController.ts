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
import { findSchoolIdService } from "../services/schoolService";
import Course from "../models/Course";

const createCourseController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const {
      courseTitle,
      courseCode,
      courseUnits,
      lectInCharge,
      facultyName,
      deptName,
    } = req.body;

    const school = await findSchoolIdService(id);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    await createCourseService({
      schoolName: school.schoolName,
      courseTitle,
      courseCode,
      courseUnits,
      lectInCharge,
      facultyName,
      deptName,
    });

    res.status(200).json({ message: success_course_reg });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolCoursesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const school = await findSchoolIdService(id);

    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    const courses = await findSchoolCoursesService({
      schoolName: school.schoolName,
    });

    totalRecords = await Course.countDocuments({
      schoolName: school.schoolName,
    });
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
