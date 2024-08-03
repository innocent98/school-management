import Course from "../models/Course";
import { courseReg } from "../utils/interfaces";

const createCourseService = async (courseInfo: courseReg) => {
  const newCourse = new Course(courseInfo);
  const savedCourse = await newCourse.save();
  return savedCourse;
};

const findCoursesService = async (query: any, page: any, pageSize: number) => {
  const courses = await Course.find(query)
    .sort({ courseTitle: 1 })
    .select({ updatedAt: 0 })
    .skip((parseInt(page) - 1) * pageSize)
    .limit(pageSize)
    .exec();

  return courses;
};

export { createCourseService, findCoursesService };
