import ExamsAndRecords from "../models/ExamsAndRecords";
import { examsAndRecordsReg } from "../utils/interfaces";

const createExamAndRecordService = async (
  exam_and_records_info: examsAndRecordsReg
) => {
  const newExamAndRecord = new ExamsAndRecords(exam_and_records_info);
  const savedExamAndRecord = await newExamAndRecord.save();
  return savedExamAndRecord;
};

const findSchoolExamsAndRecordsService = async (
  query: any,
  page: any,
  pageSize: number
) => {
  const examsAndRecords = await ExamsAndRecords.find(query)
    .sort({ semester_session: 1 })
    .select({ updatedAt: 0 })
    .populate("school")
    .skip((parseInt(page) - 1) * pageSize)
    .limit(pageSize)
    .exec();

  return examsAndRecords;
};

const findSchoolExamAndRecordService = async (props: object) => {
  const examAndRecord = await ExamsAndRecords.findOne(props)
    .select({ updatedAt: 0 })
    .populate("students")
    .populate("courses")
    .exec();

  return examAndRecord;
};

export {
  createExamAndRecordService,
  findSchoolExamsAndRecordsService,
  findSchoolExamAndRecordService,
};
