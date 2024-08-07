import Department from "../models/Department";
import { deptReg } from "../utils/interfaces";

const createDepartmentService = async (deptInfo: deptReg) => {
  const newDepartment = new Department(deptInfo);
  const savedDept = newDepartment.save();
  return savedDept;
};

const findSchoolDeptService = async (query: any) => {
  const faculties = await Department.find(query)
    .sort({ deptName: 1 })
    .select({ updatedAt: 0 })
    .populate("school")
    .exec();

  return faculties;
};

export { createDepartmentService, findSchoolDeptService };
