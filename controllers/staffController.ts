import { Request, Response } from "express";
import {
  createStaffService,
  findStaffIdService,
  findStaffService,
  findStaffsService,
} from "../services/staffService";
import bcrypt from "bcrypt";
import {
  accountCreated,
  connectionError,
  existingAccount,
  not_allowed,
} from "../utils/messages";
import {
  findSchoolIdAndUpdateService,
  findSchoolIdService,
} from "../services/schoolService";
import Staff from "../models/Staff";

const createStaffController = async (req: Request | any, res: Response) => {
  try {
    const { school, fullName, email, password, role, phone, address } =
      req.body;
    const { id: _ } = req.user;
    const { id } = req.params;

    const schoolUser = await findSchoolIdService(_);

    if (!schoolUser) {
      return res.status(400).json({ message: not_allowed });
    }

    const existingStaff = await findStaffService({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingStaff) {
      return res.status(400).json({ message: existingAccount });
    }

    const newStaff = await createStaffService({
      school,
      fullName,
      email,
      password: hashedPassword,
      role,
      phone,
      address,
    });

    const addStudentToSchool = await findSchoolIdAndUpdateService(id, {
      staffs: { fullName, email, role },
    });

    await addStudentToSchool?.updateOne({
      $push: { staffIds: newStaff.id },
    });

    res.status(200).json({ message: accountCreated });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolStaffsController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
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

    const staffs = await findStaffsService({ school: staff.school });

    totalRecords = await Staff.countDocuments({ school: staff.school });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      staffs,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolStaffProfileController = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { id } = req.user;
    const { id: _ } = req.params;

    const staff = await findStaffIdService(id);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const staffProfile = await findStaffIdService(_);

    res.status(200).json({ data: staffProfile });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export {
  createStaffController,
  findSchoolStaffsController,
  findSchoolStaffProfileController,
};
