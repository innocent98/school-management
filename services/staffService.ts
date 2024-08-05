import Staff from "../models/Staff";
import { staffReg } from "../utils/interfaces";

const createStaffService = async (staffInfo: staffReg) => {
  const newStaff = new Staff(staffInfo);
  const savedStaff = await newStaff.save();
  return savedStaff;
};

const findStaffsService = async (query: any) => {
  const staffs = await Staff.find(query)
    .sort({ fullName: 1 })
    .select({ updatedAt: 0, password: 0 })
    .exec();

  return staffs;
};

const findStaffService = async (props: object) => {
  const staff = await Staff.findOne(props)
    .select({
      password: 0,
      updatedAt: 0,
    })
    .exec();

  return staff;
};

const findStaffIdService = async (id: string) => {
  const staff = await Staff.findById(id)
    .select({
      password: 0,
      updatedAt: 0,
    })
    .exec();

  return staff;
};

export {
  createStaffService,
  findStaffsService,
  findStaffService,
  findStaffIdService,
};
