import { Request, Response } from "express";
import { connectionError, not_allowed, success } from "../utils/messages";
import { findSchoolIdService } from "../services/schoolService";
import {
  createFacultyService,
  findSchoolFacultiesService,
} from "../services/facultyService";
import Faculty from "../models/Faculty";

const createFacultyController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { facultyName } = req.body;

    const school = await findSchoolIdService(id);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    await createFacultyService({
      schoolName: school.schoolName,
      facultyName,
    });

    res.status(200).json({ message: success });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolFacultiesController = async (req: Request, res: Response) => {
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

    const faculties = await findSchoolFacultiesService({
      schoolName: school.schoolName,
    });

    totalRecords = await Faculty.countDocuments({
      schoolName: school.schoolName,
    });
    totalPages = Math.ceil(totalRecords / pageSize);

    const response = {
      totalPages,
      currentPage,
      length: totalRecords,
      faculties,
    };

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createFacultyController, findSchoolFacultiesController };
