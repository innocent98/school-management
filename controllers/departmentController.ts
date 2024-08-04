import { Request, Response } from "express";
import { connectionError, not_allowed, success } from "../utils/messages";
import { findSchoolIdService } from "../services/schoolService";
import {
  createDepartmentService,
  findSchoolDeptService,
} from "../services/departmentService";
import Department from "../models/Department";

const createDeptController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { deptName, facultyName } = req.body;

    const school = await findSchoolIdService(id);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    await createDepartmentService({
      schoolName: school.schoolName,
      deptName,
      facultyName,
    });

    res.status(200).json({ message: success });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolDeptController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const school = await findSchoolIdService(id);

    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    const depts = await findSchoolDeptService({
      schoolName: school.schoolName,
    });

    totalRecords = await Department.countDocuments({
      schoolName: school.schoolName,
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
