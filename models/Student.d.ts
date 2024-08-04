import { Model } from "mongoose";

type Student = {
  lastName: string;
  otherNames: string;
  email: string;
  password: string;
  school: string;
  enrollmentId: string;
  course?: string;
  batch?: string;
  studentLevel?: string;
  idCard?: string;
};

type StudentModel = Model<Student>;

declare const Student: StudentModel;

export default Student;
