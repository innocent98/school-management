import { Request, Response } from "express";
import {
  connectionError,
  exams_and_records_created,
  not_allowed,
} from "../utils/messages";
import { findStaffIdService } from "../services/staffService";
import {
  createExamAndRecordService,
  findSchoolExamAndRecordService,
  findSchoolExamsAndRecordsService,
} from "../services/ExamsAndRecordsService";
import ExamsAndRecords from "../models/ExamsAndRecords";

const createExamsAndRecordsControoler = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const { semester_session } = req.body;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    await createExamAndRecordService({
      school: staff.school,
      semester_session,
    });

    res.status(200).json({ message: exams_and_records_created });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolExamsAndRecordsController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page
    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const examsAndRecords = await findSchoolExamsAndRecordsService(
      { school: staff.school },
      page,
      pageSize
    );

    totalRecords = await ExamsAndRecords.countDocuments({
      school: staff.school,
    });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      examsAndRecords,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolExamAndRecordController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { semester_session } = req.query;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const examAndRecord = await findSchoolExamAndRecordService({
      semester_session,
    });

    res.status(200).json({ data: examAndRecord });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createExamsAndRecordsControoler, findSchoolExamsAndRecordsController, findSchoolExamAndRecordController };
