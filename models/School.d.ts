import { Model } from "mongoose";

type ContactInfo = {
  contactEmail: string;
  contactPhone: string;
};

type School = {
  lastName: string;
  otherNames: string;
  schoolName: string;
  schoolLogo: string;
  dropdownImg: string;
  email: string;
  password: string;
  primaryColor: string;
  secondaryColor: string;
  schoolAddress: string;
  schoolPhone: string;
  noOfSearch?: number;
  contactInfo?: ContactInfo;
  students?: string[];
  staffs?: string[];
};

type SchoolModel = Model<School>;

declare const School: SchoolModel;

export default School;
