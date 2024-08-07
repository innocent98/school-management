import Faculty from "../models/Faculty";
import { facultyReg } from "../utils/interfaces";

const createFacultyService = async (facultyInfo: facultyReg) => {
  const newFaculty = new Faculty(facultyInfo);
  const savedFaculty = await newFaculty.save();
  return savedFaculty;
};

const findSchoolFacultiesService = async (query: any) => {
  const faculties = await Faculty.find(query)
    .sort({ facultyName: 1 })
    .select({ updatedAt: 0 })
    .populate("school")
    .exec();

  return faculties;
};

export { createFacultyService, findSchoolFacultiesService };
