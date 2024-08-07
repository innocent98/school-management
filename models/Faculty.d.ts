import { Model } from "mongoose";

type Faculty = {
  school: string;
  facultyName: string;
};

type FacultyModel = Model<Faculty>;

declare const Faculty: FacultyModel;

export default Faculty;
