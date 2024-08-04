import Student from "../models/Student";
import { studentReg } from "../utils/interfaces";

const createStudentService = async (studentInfo: studentReg) => {
  const newStudent = new Student(studentInfo);
  const savedStudent = await newStudent.save();
  return savedStudent;
};

const findStudentsService = async (query: any, page: any, pageSize: number) => {
  const students = await Student.find(query)
    .sort({ lastName: 1, otherNames: 1 })
    .select({ password: 0, updatedAt: 0 })
    .skip((parseInt(page) - 1) * pageSize)
    .limit(pageSize)
    .exec();
  return students;
};

const findStudentService = async (props: object) => {
  const student = await Student.findOne(props)
    .select({ password: 0, updatedAt: 0 })
    .exec();
  return student;
};

const findStudentIdService = async (id: string) => {
  const student = await Student.findById(id)
    .select({ password: 0, updatedAt: 0 })
    .exec();
  return student;
};

export {
  createStudentService,
  findStudentService,
  findStudentsService,
  findStudentIdService,
};
