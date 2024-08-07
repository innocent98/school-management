import Course from "../models/Course";
import { courseReg } from "../utils/interfaces";

const createCourseService = async (courseInfo: courseReg) => {
  const newCourse = new Course(courseInfo);
  const savedCourse = await newCourse.save();
  return savedCourse;
};

const findSchoolCoursesService = async (query: any) => {
  const courses = await Course.find(query)
    .sort({ courseTitle: 1 })
    .select({ updatedAt: 0 })
    .populate("school")
    .exec();

  return courses;
};

export { createCourseService, findSchoolCoursesService };
