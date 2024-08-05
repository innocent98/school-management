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
    const { id: _ } = req.user;

    const school = await findSchoolIdService(_);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    const staffs = await findStaffsService({ school: school.schoolName });

    res.status(200).json({ data: staffs });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolStaffController = async (req: Request | any, res: Response) => {
  try {
    const { id: _ } = req.user;

    const school = await findSchoolIdService(_);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    const staffs = await findStaffIdService(school.id);

    res.status(200).json({ data: staffs });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export {
  createStaffController,
  findSchoolStaffsController,
  findSchoolStaffController,
};
