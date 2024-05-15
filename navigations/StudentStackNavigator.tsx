import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AcademicNavigator,
  AttendanceManagementNavigator,
  ChatNavigator,
  ExamAndRecordNavigator,
  FeesManagementNavigator,
  OnlineExamNavigator,
  ReceptionNavigator,
  StaffProfileNavigator,
  StudentProfileNavigator,
} from './Stacks';
import DrawerNavigator from './DrawerNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from '../components/Notification';
import DrawerTab from './DrawerTab';
import Home from '../screens/student/Home';
import MyFees from '../screens/student/fees/MyFees';
import FeesDetails from '../components/FeesDetails';
import PaymentInfo from '../components/PaymentInfo';
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
import AcademicSession from '../screens/admin/academic/AcademicSession';
import Faculties from '../screens/admin/academic/Faculties';
import Curriculum from '../screens/admin/academic/Curriculum';
import Assignment from '../screens/admin/academic/Assignment';
import TimetableOption from '../screens/admin/academic/timetable/TimetableOption';
import EditTimetable from '../screens/admin/academic/timetable/EditTimetble';
import StudentProfile from '../screens/admin/students/StudentProfile';
import EditCalendar from '../screens/admin/academic/calendar/EditCalendar';

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
      <Stack.Screen name="StudentProfile" component={StudentProfile} />

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
