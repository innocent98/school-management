import { Model } from "mongoose";

type StaffRole =
  | "admin"
  | "lecturer"
  | "bursar"
  | "admission officer"
  | "other staff";

type Staff = {
  school: string;
  fullName: string;
  email: string;
  password: string;
  role: StaffRole;
  phone?: string;
  address?: string;
};

type StaffModel = Model<Staff>;

declare const Staff: StaffModel;

export default Staff;
