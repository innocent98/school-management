import { Model } from "mongoose";

type StudentCourse = {
  studentId: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
};

type StudentCourseModel = Model<StudentCourse>;

declare const StudentCourse: StudentCourseModel;

export default StudentCourse;
