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

export type staffReg = {
  school: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
  address?: string;
};

export type courseReg = {
  schoolName: string;
  courseTitle: string;
  courseCode: string;
  courseUnits: string;
  lectInCharge: string;
  facultyName: string;
  deptName: string;
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

export type deptReg = {
  schoolName: string;
  deptName: string;
  facultyName: string;
};

type ProjectTopic = {
  projectTopic: string;
  isApproved: boolean;
  projectType: string;
};

export type projectReg = {
  schoolName: string;
  studentName: string;
  projectTopic: ProjectTopic[];
  startDate?: Date;
  endDate?: Date;
};

export type examsAndRecordsReg = {
  school: string;
  semester_session: string;
  students?: string[];
  courses?: string[];
};
