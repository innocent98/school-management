import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/student/Home';
import MyFees from '../screens/student/fees/MyFees';
import FeesDetails from '../screens/student/fees/FeesDetails';
import PaymentInfo from '../screens/student/fees/PaymentInfo';
import Profile from '../screens/student/Profile';
import MyCourse from '../screens/student/MyCourse';
import MyResults from '../screens/student/MyResults';
import CourseRegistration from '../screens/student/CourseRegistration';
import Project from '../screens/student/Project';
import ELibrary from '../screens/student/e-library/E-Library';
import ExamRegistration from '../screens/student/ExamRegistration';
import Academic from '../screens/admin/academic/Academic';
import Timetable from '../screens/admin/academic/timetable/Timetable';
import Calendar from '../screens/admin/academic/calendar/Calendar';
import AcademicSession from '../screens/admin/academic/academicSession/AcademicSession';
import Faculties from '../screens/admin/academic/faculties/Faculties';
import Curriculum from '../screens/admin/academic/curriculum/Curriculum';
import Assignment from '../screens/admin/academic/assignment/Assignment';
import TimetableOption from '../screens/admin/academic/timetable/TimetableOption';
import EditTimetable from '../screens/admin/academic/timetable/EditTimetble';
import StudentProfile from '../screens/admin/students/StudentProfile';
import EditCalendar from '../screens/admin/academic/calendar/EditCalendar';
import FacultyCourses from '../screens/admin/academic/faculties/FacultyCourses';
import CurriculumLevel from '../screens/admin/academic/curriculum/CurriculumLevel';
import CurriculumDetails from '../screens/admin/academic/curriculum/CurriculumDetails';
import EditCourses from '../screens/admin/academic/curriculum/EditCourses';
import EditAssignment from '../screens/admin/academic/assignment/EditAssignment';
import Reception from '../screens/admin/reception/Reception';
import AdmissionEnquiry from '../screens/admin/reception/AdmissionEnquiry';
import AdmissionEnquiryDetails from '../screens/admin/reception/AdmissionEnquiryDetails';
import VisitorLog from '../screens/admin/reception/VisitorLog';
import CallLog from '../screens/admin/reception/CallLog';
import Complaint from '../screens/admin/reception/Complaint';
import EditAdmissionEnquiry from '../screens/admin/reception/EditAdmissionEnquiry';
import EditVisitorLog from '../screens/admin/reception/EditVisitorLog';
import Students from '../screens/admin/students/Students';
import BasicInformation from '../screens/admin/students/BasicInformation';
import ParentInformation from '../screens/admin/students/ParentInformation';
import ContactInformation from '../screens/admin/students/ContactInformation';
import DocumentInformation from '../screens/admin/students/DocumentInformation';
import ManageFees from '../screens/admin/fees/ManageFees';
import ManageResults from '../screens/admin/results/ManageResults';
import StudentResult from '../screens/admin/students/StudentResult';
import Staffs from '../screens/admin/staffs/Staffs';
import StaffProfile from '../screens/admin/staffs/StaffProfile';
import Results from '../screens/admin/results/Results';
import ResultDetails from '../screens/admin/results/ResultDetails';
import ResultAttendance from '../screens/admin/results/ResultAttendance';
import Fees from '../screens/admin/fees/Fees';
import FeesStatus from '../screens/admin/fees/FeesStatus';
import AttendanceOption from '../screens/admin/attendance/AttendanceOption';
import StudentAttendance from '../screens/admin/attendance/StudentAttendance';
import StudentExamAttendance from '../screens/admin/attendance/StudentExamAttendance';
import TakeClassAttendance from '../screens/admin/attendance/TakeClassAttendance';
import TakeExamAttendance from '../screens/admin/attendance/TakeExamAttendance';
import AttendanceWeeks from '../screens/admin/attendance/AttendanceWeeks';
import Exam from '../screens/admin/exam/Exam';
import ExamEditor from '../screens/admin/exam/ExamEditor';
import Hostel from '../screens/admin/Hostel';
import Chat from '../screens/chat/Chat';
import Messenger from '../screens/chat/Messenger';
import SchoolSelection from '../screens/schoolSelection/SchoolSelection';
import FindSchool from '../screens/schoolSelection/FindSchool';
import Notification from '../components/Notification';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StudentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current, layouts}) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        }),
      }}>
      <Stack.Screen name="SchoolSelection" component={SchoolSelection} />
      <Stack.Screen name="FindSchool" component={FindSchool} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyCourse" component={MyCourse} />
      <Stack.Screen name="MyResults" component={MyResults} />
      <Stack.Screen name="MyFees" component={MyFees} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="FeesDetails" component={FeesDetails} />
      <Stack.Screen name="CourseRegistration" component={CourseRegistration} />
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="ELibrary" component={ELibrary} />
      <Stack.Screen name="ExamRegistration" component={ExamRegistration} />
      <Stack.Screen name="Academic" component={Academic} />
      <Stack.Screen name="Timetable" component={Timetable} />
      <Stack.Screen name="TimetableOption" component={TimetableOption} />
      <Stack.Screen name="EditTimetable" component={EditTimetable} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="EditCalendar" component={EditCalendar} />
      <Stack.Screen name="AcademicSession" component={AcademicSession} />
      <Stack.Screen name="Faculties" component={Faculties} />
      <Stack.Screen name="Curriculum" component={Curriculum} />
      <Stack.Screen name="Assignment" component={Assignment} />
      <Stack.Screen name="Students" component={Students} />
      <Stack.Screen name="StudentProfile" component={StudentProfile} />
      <Stack.Screen name="BasicInformation" component={BasicInformation} />
      <Stack.Screen name="ParentInformation" component={ParentInformation} />
      <Stack.Screen name="ContactInformation" component={ContactInformation} />
      <Stack.Screen
        name="DocumentInformation"
        component={DocumentInformation}
      />
      <Stack.Screen name="ManageFees" component={ManageFees} />
      <Stack.Screen name="ManageResults" component={ManageResults} />
      <Stack.Screen name="StudentResult" component={StudentResult} />
      <Stack.Screen name="FacultyCourses" component={FacultyCourses} />
      <Stack.Screen name="CurriculumLevel" component={CurriculumLevel} />
      <Stack.Screen name="CurriculumDetails" component={CurriculumDetails} />
      <Stack.Screen name="EditCourses" component={EditCourses} />
      <Stack.Screen name="EditAssignment" component={EditAssignment} />
      <Stack.Screen name="Reception" component={Reception} />
      <Stack.Screen name="AdmissionEnquiry" component={AdmissionEnquiry} />
      <Stack.Screen
        name="AdmissionEnquiryDetails"
        component={AdmissionEnquiryDetails}
      />
      <Stack.Screen
        name="EditAdmissionEnquiry"
        component={EditAdmissionEnquiry}
      />
      <Stack.Screen name="VisitorLog" component={VisitorLog} />
      <Stack.Screen name="EditVisitorLog" component={EditVisitorLog} />
      <Stack.Screen name="CallLog" component={CallLog} />
      <Stack.Screen name="Complaint" component={Complaint} />
      <Stack.Screen name="Staffs" component={Staffs} />
      <Stack.Screen name="StaffProfile" component={StaffProfile} />
      <Stack.Screen name="Exams_Records" component={Results} />
      <Stack.Screen name="ResultDetails" component={ResultDetails} />
      <Stack.Screen name="ResultAttendance" component={ResultAttendance} />
      <Stack.Screen name="Fees" component={Fees} />
      <Stack.Screen name="FeesStatus" component={FeesStatus} />
      <Stack.Screen name="Attendance" component={AttendanceOption} />
      <Stack.Screen name="StudentAttendance" component={StudentAttendance} />
      <Stack.Screen
        name="StudentExamAttendance"
        component={StudentExamAttendance}
      />
      <Stack.Screen
        name="TakeClassAttendance"
        component={TakeClassAttendance}
      />
      <Stack.Screen name="TakeExamAttendance" component={TakeExamAttendance} />
      <Stack.Screen name="AttendanceWeeks" component={AttendanceWeeks} />
      <Stack.Screen name="Exam" component={Exam} />
      <Stack.Screen name="ExamEditor" component={ExamEditor} />
      <Stack.Screen name="Hostel" component={Hostel} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Messenger" component={Messenger} />
      <Stack.Screen name="Notification" component={Notification} />

      {/* <Stack.Screen
        name="Receptionist"
        component={ReceptionNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Academics"
        component={AcademicNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Student"
        component={StudentProfileNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StaffProfileNavigator"
        component={StaffProfileNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExamAndRecord"
        component={ExamAndRecordNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeesManagement"
        component={FeesManagementNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AttendanceManagement"
        component={AttendanceManagementNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExamManagement"
        component={OnlineExamNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chats"
        component={ChatNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerTitle: 'Notification'}}
      /> */}
    </Stack.Navigator>
  );
};

export default StudentStackNavigator;
