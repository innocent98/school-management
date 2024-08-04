import { Request, Response } from "express";
import { createCourseService } from "../services/courseService";
import {
  connectionError,
  not_allowed,
  success_course_reg,
} from "../utils/messages";
import { findSchoolIdService } from "../services/schoolService";

const createCourseController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { courseTitle, courseCode, courseUnits, schoolName } = req.body;

    const school = await findSchoolIdService(id);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    await createCourseService({
      schoolName: school.schoolName,
      courseTitle,
      courseCode,
      courseUnits,
    });

    res.status(200).json({ message: success_course_reg });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createCourseController };
