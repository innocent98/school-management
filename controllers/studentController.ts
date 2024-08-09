import { Request, Response } from "express";
import {
  accountCreated,
  connectionError,
  existingAccount,
  incorrectCredentials,
  not_allowed,
  not_belong_to_school,
  user_not_found,
} from "../utils/messages";
import {
  createStudentService,
  findStudentIdService,
  findStudentService,
} from "../services/studentService";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import {
  findSchoolIdAndUpdateService,
  findSchoolService,
} from "../services/schoolService";
import { findStaffIdService } from "../services/staffService";

const createStudentController = async (req: Request | any, res: Response) => {
  try {
    const {
      lastName,
      otherNames,
      email,
      password,
      school,
      enrollmentId,
      course,
      batch,
      studentLevel,
      idCard,
    } = req.body;

    const { id } = req.params;
    const { id: _ } = req.user;

    const staff = await findStaffIdService(_);
    if (!staff) {
      return res.status(400).json({ message: not_allowed });
    }

    const existingStudent = await findStudentService({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingStudent) {
      return res.status(400).json({ message: existingAccount });
    }

    const newStudent = await createStudentService({
      lastName,
      otherNames,
      email,
      password: hashedPassword,
      school,
      enrollmentId,
      course,
      batch,
      studentLevel,
      idCard,
    });

    await findSchoolIdAndUpdateService(id, {
      students: newStudent.id,
    });

    res.status(200).json({ message: accountCreated });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const studentLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password, school } = req.body;

    const existingStudent = await findStudentService({ email });

    if (
      !existingStudent ||
      !(await bcrypt.compare(password, existingStudent.password))
    ) {
      return res.status(400).json({ message: incorrectCredentials });
    }

    const findStudentSchool = await findSchoolService({ school });

    if (!findStudentSchool?.students?.includes(existingStudent.id)) {
      return res.status(400).json({ message: not_belong_to_school });
    }

    const tokenProps = { id: existingStudent.id, expiresIn: "30d" };

    const token = generateToken(tokenProps);

    res.status(200).json({ data: existingStudent, token });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const studentProfileController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user as any;

    const student = await findStudentIdService(id);

    if (!student) {
      return res.status(404).json({ message: user_not_found });
    }

    res.status(200).json({ data: student });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export {
  createStudentController,
  studentLoginController,
  studentProfileController,
};
