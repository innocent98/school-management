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
  incorrectCredentials,
  not_allowed,
  not_belong_to_school,
} from "../utils/messages";
import {
  findSchoolIdAndUpdateService,
  findSchoolIdService,
  findSchoolService,
} from "../services/schoolService";
import Staff from "../models/Staff";
import { generateToken } from "../utils/jwt";

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

    const addStaffToSchool = await findSchoolIdAndUpdateService(id, {
      staffs: { fullName, email, role },
    });

    await addStaffToSchool?.updateOne({
      $push: { staffIds: newStaff.id },
    });

    res.status(200).json({ message: accountCreated });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const staffLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password, school } = req.body;

    const existingStaff = await findStaffService({ email });

    if (
      !existingStaff ||
      !(await bcrypt.compare(password, existingStaff.password))
    ) {
      return res.status(400).json({ message: incorrectCredentials });
    }

    const findStaffSchool = await findSchoolService({ school });

    if (!findStaffSchool?.students?.includes(existingStaff.id)) {
      return res.status(400).json({ message: not_belong_to_school });
    }

    const tokenProps = { id: existingStaff.id, expiresIn: "30d" };

    const token = generateToken(tokenProps);

    res.status(200).json({ data: existingStaff, token });
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
  staffLoginController,
  findSchoolStaffsController,
  findSchoolStaffProfileController,
};
