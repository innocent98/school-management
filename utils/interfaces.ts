type ContactInfo = {
  contactEmail: string;
  contactPhone: string;
};

export type schoolReg = {
  schoolName: string;
  schoolLogo: string;
  dropdownImg: string;
  email: string;
  password: string;
  primaryColor: string;
  secondaryColor: string;
  schoolAddress: string;
  schoolPhone: string;
  contactInfo?: ContactInfo;
};

export type studentReg = {
  lastName: string;
  otherNames: string;
  email: string;
  password: string;
  school: string;
  enrollmentId: string;
  course?: string;
  batch?: string;
  studentLevel?: string;
  idCard?: string;
};

export type courseReg = {
  schoolName: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
};

export type studentCourseReg = {
  studentId: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
};

export type facultyReg = {
  schoolName: string;
  facultyName: string;
};
