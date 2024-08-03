import { Model } from "mongoose";

type Faculty = {
  schoolName: string;
  facultyName: string;
};

type FacultyModel = Model<Faculty>;

declare const Faculty: FacultyModel;

export default Faculty;
