import { Request, Response } from "express";
import {
  connectionError,
  not_allowed,
  success,
} from "../utils/messages";
import {
  createDepartmentService,
  findSchoolDeptService,
} from "../services/departmentService";
import Department from "../models/Department";
import { findStaffIdService } from "../services/staffService";

const createDeptController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { deptName, faculty } = req.body;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    await createDepartmentService({
      school: staff.school,
      deptName,
      faculty,
    });

    res.status(200).json({ message: success });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolDeptController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const depts = await findSchoolDeptService({
      schoolName: staff.school,
    });

    totalRecords = await Department.countDocuments({
      schoolName: staff.school,
    });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      depts,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createDeptController, findSchoolDeptController };
