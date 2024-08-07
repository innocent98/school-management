import { Model } from "mongoose";

type Department = {
  school: string;
  deptName: string;
  faculty: string
};

type DepartmentModel = Model<Department>;

declare const Department: DepartmentModel;

export default Department;
