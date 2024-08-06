import { Request, Response } from "express";
import {
  connectionError,
  not_allowed,
  project_created,
} from "../utils/messages";
import { findStudentIdService } from "../services/studentService";
import { createProjectService } from "../services/projectService";

const createProjectController = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { projectTopic, startDate, endDate } = req.body;

    const student = await findStudentIdService(id);

    if (!student) {
      return res.status(400).json({ message: not_allowed });
    }

    await createProjectService({
      schoolName: student.school,
      studentName: `${student.lastName} ${student.otherNames}`,
      projectTopic,
      startDate,
      endDate,
    });

    res.status(200).json({ message: project_created });
  } catch (err) {
    res.status(500).json({ message: connectionError });
  }
};

export { createProjectController };
