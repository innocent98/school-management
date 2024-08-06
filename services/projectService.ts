import Project from "../models/Project";
import { projectReg } from "../utils/interfaces";

const createProjectService = async (projectInfo: projectReg) => {
  const newProject = new Project(projectInfo);
  const savedProject = await newProject.save();
  return savedProject;
};

export { createProjectService };
