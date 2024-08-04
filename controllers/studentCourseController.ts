import StudentCourse from "../models/StudentCourse";
import {
  createStudentCourseService,
  findStudentCoursesService,
} from "../services/studentCourseService";
import { findStudentIdService } from "../services/studentService";
import {
  connectionError,
  not_allowed,
  success_course_reg,
} from "./../utils/messages";
import { Request, Response } from "express";

const createStudentCourseController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const { courseTitle, courseCode, courseUnits } = req.body;

    const student = await findStudentIdService(id);

    if (!student) {
      return res.status(400).json({ message: not_allowed });
    }

    await createStudentCourseService({
      studentId: id,
      courseTitle,
      courseCode,
      courseUnits,
    });

    res.status(200).json({ message: success_course_reg });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findStudentCoursesController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const student = await findStudentIdService(id);

    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    if (!student) {
      return res.status(400).json({ message: not_allowed });
    }

    const studentCourses = await findStudentCoursesService({ studentId: id });

    totalRecords = await StudentCourse.countDocuments({ studentId: id });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      courses: studentCourses,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createStudentCourseController, findStudentCoursesController };
