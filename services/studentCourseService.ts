import StudentCourse from "../models/StudentCourse";
import { studentCourseReg } from "../utils/interfaces";

const createStudentCourseService = async (courseInfo: studentCourseReg) => {
  const newCourse = new StudentCourse(courseInfo);
  const savedCourse = await newCourse.save();
  return savedCourse;
};

const findStudentCoursesService = async (query: any) => {
  const courses = await StudentCourse.find(query)
    .sort({ courseTitle: 1 })
    .select({ updatedAt: 0 })
    .exec();
  return courses;
};

export { createStudentCourseService, findStudentCoursesService };
