import { Model } from "mongoose";

type Staff = {
  school: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
  address?: string;
};

type StaffModel = Model<Staff>;

declare const Staff: StaffModel;

export default Staff;
