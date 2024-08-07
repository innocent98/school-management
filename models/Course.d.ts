import { Model } from "mongoose";

type Course = {
  school: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
  lectInCharge: string;
  faculty: string;
  dept: string;
};

type CourseModel = Model<Course>;

declare const Course: CourseModel;

export default Course;
