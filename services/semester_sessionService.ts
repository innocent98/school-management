import Semester_Session from "../models/Semester_Session";
import { semester_sessionReg } from "../utils/interfaces";

const createSemester_SessionService = async (
  semesterInfo: semester_sessionReg
) => {
  const semester_session = new Semester_Session(semesterInfo);
  const savedSemester_Session = await semester_session.save();
  return savedSemester_Session;
};

const findSchoolSemester_SessionsService = async (query: any) => {
  const semester_sessions = await Semester_Session.find(query)
    .select({ updatedAt: 0 })
    .sort({ academic_year: 1 })
    .populate("school")
    .exec();

  return semester_sessions;
};

export { createSemester_SessionService, findSchoolSemester_SessionsService };
