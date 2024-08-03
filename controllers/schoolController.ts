import {
  createSchoolService,
  findSchoolService,
  findSchoolsService,
} from "../services/schoolService";
import {
  connectionError,
  existingAccount,
  incorrectCredentials,
  registration_success,
} from "./../utils/messages";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import School from "../models/School";
import { generateToken } from "../utils/jwt";

type Filter = { schoolName: { $regex: string; $options: string } };

const createSchoolController = async (req: Request, res: Response) => {
  try {
    const {
      schoolName,
      schoolLogo,
      dropdownImg,
      email,
      password,
      primaryColor,
      secondaryColor,
      schoolAddress,
      schoolPhone,
      contactInfo,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingSchool = await findSchoolService({ email });

    if (existingSchool) {
      return res.status(403).json({ message: existingAccount });
    }

    await createSchoolService({
      schoolName,
      schoolLogo,
      dropdownImg,
      email,
      password: hashedPassword,
      primaryColor,
      secondaryColor,
      schoolAddress,
      schoolPhone,
      contactInfo,
    });

    res.status(200).json({ message: registration_success });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const loginSchoolController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingSchool = await findSchoolService({email});

    if (
      !existingSchool ||
      !(await bcrypt.compare(password, existingSchool.password))
    ) {
      return res.status(400).json({ message: incorrectCredentials });
    }

    const tokenProps = { id: existingSchool.id, expiresIn: "30d" };

    const token = generateToken(tokenProps);

    res.status(200).json({ data: existingSchool, token });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolsController = async (req: Request, res: Response) => {
  try {
    // Pagination parameters
    const { query, page } = req.query as any;

    const pageSize: number = 20; // Number of items to return per page

    let filter: Filter;
    let totalRecords: number;
    let totalPages: number;
    const currentPage: number = parseInt(page) || 1;

    let schools: School[];

    if (query) {
      // Convert 'query' to a string if it's not already a string
      const queryString = typeof query === "string" ? query : "";

      filter = { schoolName: { $regex: queryString, $options: "i" } };

      schools = await findSchoolsService(filter, page, pageSize);
      totalRecords = await School.countDocuments(filter);
      totalPages = Math.ceil(totalRecords / pageSize);

      const response = {
        totalPages,
        currentPage,
        length: totalRecords,
        schools: schools,
      };

      return res.status(200).json({ data: response });
    }

    schools = await findSchoolsService({}, page, pageSize);
    totalRecords = await School.countDocuments();
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      schools: schools,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createSchoolController, findSchoolsController, loginSchoolController };
