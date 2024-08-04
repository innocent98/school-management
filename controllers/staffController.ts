import { Request, Response } from "express";
import { createStaffService, findStaffService } from "../services/staffService";
import bcrypt from "bcrypt";
import {
  accountCreated,
  connectionError,
  existingAccount,
} from "../utils/messages";
import { findSchoolIdAndUpdateService } from "../services/schoolService";

const createStaffController = async (req: Request, res: Response) => {
  try {
    const { school, fullName, email, password, role, phone, address } =
      req.body;

    const { id } = req.params;

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

export { createStaffController };
