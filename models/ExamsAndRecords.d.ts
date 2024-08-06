import { Model } from "mongoose";

type ExamsAndRecords = {
  school: string;
  semester_session: string;
  students?: string[];
  courses?: string[];
};

type ExamsAndRecordsModel = Model<ExamsAndRecords>;

declare const ExamsAndRecords: ExamsAndRecordsModel;

export default ExamsAndRecords;
