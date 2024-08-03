import { Model } from "mongoose";

type Course = {
  schoolName: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
};

type CourseModel = Model<Course>;

declare const Course: CourseModel;

export default Course;
