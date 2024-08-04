import { Model } from "mongoose";

type Department = {
  schoolName: string;
  deptName: string;
  facultyName: string
};

type DepartmentModel = Model<Department>;

declare const Department: DepartmentModel;

export default Department;
