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
import Home from '../screens/Home';
import MyFees from '../screens/MyFees';
import FeesDetails from '../components/FeesDetails';
import PaymentInfo from '../components/PaymentInfo';
import Profile from '../screens/Profile';
import MyCourse from '../screens/MyCourse';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StudentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyFees" component={MyFees} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="FeesDetails" component={FeesDetails} />
      <Stack.Screen name="MyCourse" component={MyCourse} />
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
