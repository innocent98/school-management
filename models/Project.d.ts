import { Model } from "mongoose";

type ProjectTopic = {
  projectTopic: string;
  isApproved: boolean;
  projectType: string;
};

type Project = {
  school: string;
  student: string;
  projectTopic: ProjectTopic[];
  startDate?: Date;
  endDate?: Date;
  supervisor?: string;
};

type ProjectModel = Model<Project>;

declare const Project: ProjectModel;

export default Project;
