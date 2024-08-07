import School from "../models/School";
import { schoolReg } from "../utils/interfaces";

const createSchoolService = async (schoolInfo: schoolReg) => {
  const newSchool = new School(schoolInfo);
  const savedSchool = await newSchool.save();
  return savedSchool;
};

const findSchoolsService = async (query: any, page: any, pageSize: number) => {
  const schools = await School.find(query)
    .sort({ noOfSearch: -1 })
    .select({
      email: 0,
      password: 0,
      noOfSearch: 0,
      lastName: 0,
      otherNames: 0,
      updatedAt: 0,
    })
    .skip((parseInt(page) - 1) * pageSize)
    .limit(pageSize)
    .populate("students")
    .populate("staffs")
    .exec();

  return schools;
};

const findSchoolService = async (props: object) => {
  const school = await School.findOne(props)
    .select({ updatedAt: 0, password: 0 })
    .populate("students")
    .populate("staffs")
    .exec();

  return school;
};

const findSchoolIdService = async (id: string) => {
  const school = await School.findById(id)
    .select({ updatedAt: 0, password: 0 })
    .populate("students")
    .populate("staffs")
    .exec();

  return school;
};

const findSchoolIdAndUpdateService = async (id: string, props: any) => {
  const school = await School.findByIdAndUpdate(
    id,
    { $addToSet: props },
    { new: true }
  )
    .select({ updatedAt: 0, password: 0 })
    .populate("students")
    .populate("staffs")
    .exec();

  return school;
};

export {
  createSchoolService,
  findSchoolsService,
  findSchoolService,
  findSchoolIdService,
  findSchoolIdAndUpdateService,
};
