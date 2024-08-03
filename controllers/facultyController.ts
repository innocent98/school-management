import { Request, Response } from "express";
import { connectionError, not_allowed } from "../utils/messages";
import { findSchoolIdService } from "../services/schoolService";
import {
  createFacultyService,
  findSchoolFacultiesService,
} from "../services/facultyService";

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
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

const findSchoolFacultiesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const school = await findSchoolIdService(id);

    if (!school) {
      return res.status(400).json({ message: not_allowed });
    }

    const faculties = await findSchoolFacultiesService({
      schoolName: school.schoolName,
    });

    res.status(200).json({ data: faculties });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createFacultyController, findSchoolFacultiesController };
