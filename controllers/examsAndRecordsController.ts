import { Request, Response } from "express";
import {
  connectionError,
  exams_and_records_created,
  not_allowed,
} from "../utils/messages";
import { findStaffIdService } from "../services/staffService";
import { createExamAndRecordService } from "../services/ExamsAndRecordsService";
import { findSchoolIdService } from "../services/schoolService";

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

export { createExamsAndRecordsControoler };
