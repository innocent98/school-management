import { Request, Response } from "express";
import {
  connectionError,
  not_allowed,
  semester_session_created,
} from "../utils/messages";
import {
  createSemester_SessionService,
  findSchoolSemester_SessionsService,
} from "../services/semester_sessionService";
import { findStaffIdService } from "../services/staffService";
import Semester_Session from "../models/Semester_Session";

const createSemester_sessionController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const { academic_year, semester, term, startDate, endDate } = req.body;

    const staff = await findStaffIdService(id);

    if (!staff) {
      // check if user is a staff member and has the necessary permissions to create a semester session.
      return res.status(400).json({ message: not_allowed });
    }

    const session = await createSemester_SessionService({
      school: staff.school,
      academic_year,
      semester,
      term,
      startDate,
      endDate,
    });

    res.status(200).json({ message: semester_session_created, session });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolSemester_SessionController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page
    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    const staff = await findStaffIdService(id);

    if (!staff) {
      // check if user is a staff member and has the necessary permissions to create a semester session.
      return res.status(400).json({ message: not_allowed });
    }

    const semesterSessions = await findSchoolSemester_SessionsService({
      school: staff.school,
      // query to fetch semester sessions based on user's school and permissions.
    });

    totalRecords = await Semester_Session.countDocuments({
      school: staff.school,
    });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      semesterSessions,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export {
  createSemester_sessionController,
  findSchoolSemester_SessionController,
};
