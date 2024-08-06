import ExamsAndRecords from "../models/ExamsAndRecords";
import { examsAndRecordsReg } from "../utils/interfaces";

const createExamAndRecordService = async (
  exam_and_records_info: examsAndRecordsReg
) => {
  const newExamAndRecord = new ExamsAndRecords(exam_and_records_info);
  const savedExamAndRecord = await newExamAndRecord.save();
  return savedExamAndRecord;
};

export { createExamAndRecordService };
