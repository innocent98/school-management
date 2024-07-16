import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Logout from '../components/Logout';
import {COLORS} from '../constants';
import {styles} from '../constants/styles';
import {userRequest} from '../redux/requestMethod';
import Academic from '../screens/admin/academic/Academic';
import AttendanceOption from '../screens/admin/attendance/AttendanceOption';
import Exam from '../screens/admin/exam/Exam';
import Fees from '../screens/admin/fees/Fees';
import Hostel from '../screens/admin/Hostel';
import Reception from '../screens/admin/reception/Reception';
import Results from '../screens/admin/results/Results';
import Staffs from '../screens/admin/staffs/Staffs';
import Students from '../screens/admin/students/Students';
import Chat from '../screens/student/Chat';
import CourseRegistration from '../screens/student/CourseRegistration';
import ELibrary from '../screens/student/e-library/E-Library';
import ExamRegistration from '../screens/student/ExamRegistration';
import MyCourse from '../screens/student/MyCourse';
import MyResults from '../screens/student/MyResults';
import Profile from '../screens/student/Profile';
import Project from '../screens/student/Project';
import {HomeNavigator, FeesNavigator} from './Stacks';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const user = useSelector(state => state.user.currentUser);
  const cancelToken = axios.CancelToken.source();
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  // get notifications
  useEffect(() => {
    const getNotification = async () => {
      try {
        const res = await userRequest.get(`/messages/notification/all`, {
          cancelToken: cancelToken.token,
        });
        setNotifications(res.data);
      } catch (error) {}
    };
    getNotification();
    return () => {
      cancelToken.cancel();
    };
  }, [setNotifications]);

  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={HomeNavigator}
        options={{
          headerTitle: '',
          drawerIcon: () => (
            <Icon name="dashboard" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Notification', {notifications})
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

// {user.role === 'student' && (
//   <>
//     <Drawer.Screen
//       name="Profile"
//       component={Profile}
//       options={{
//         title: 'My Profile',
//         drawerIcon: () => (
//           <Icon
//             name="account-circle"
//             size={24}
//             color={COLORS.secondary}
//           />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="Courses"
//       component={MyCourse}
//       options={{
//         title: 'My Courses',
//         drawerIcon: () => (
//           <Icon name="book" size={24} color={COLORS.secondary} />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="Results"
//       component={MyResults}
//       options={{
//         title: 'My Results',
//         drawerIcon: () => (
//           <Icon name="bar-chart" size={24} color={COLORS.secondary} />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="Fees"
//       component={FeesNavigator}
//       options={{
//         title: 'My Fees',
//         drawerIcon: () => (
//           <Icon
//             name="account-balance-wallet"
//             size={24}
//             color={COLORS.secondary}
//           />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="CourseRegistration"
//       component={CourseRegistration}
//       options={{
//         title: 'Course Registration',
//         drawerIcon: () => (
//           <Icon name="school" size={24} color={COLORS.secondary} />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="Project"
//       component={Project}
//       options={{
//         title: 'Final Year Project',
//         drawerIcon: () => (
//           <Icon name="work" size={24} color={COLORS.secondary} />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="Library"
//       component={ELibrary}
//       options={{
//         title: 'E-Library',
//         drawerIcon: () => (
//           <Icon name="local-library" size={24} color={COLORS.secondary} />
//         ),
//         headerRight: () => (
//           <BorderlessButton
//             onPress={() =>
//               navigation.navigate('Notification', {notifications})
//             }>
//             <View style={styles.header}>
//               <Icon
//                 name="notifications"
//                 size={28}
//                 color={COLORS.secondary}
//               />
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {notifications.length}
//                 </Text>
//               </View>
//             </View>
//           </BorderlessButton>
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="ExamRegistration"
//       component={ExamRegistration}
//       options={{
//         title: 'Exam Registration',
//         drawerIcon: () => (
//           <Icon
//             name="account-balance-wallet"
//             size={24}
//             color={COLORS.secondary}
//           />
//         ),
//       }}
//     />
//   </>
// )}

// {/* admin */}
// {user.role === 'admin' && (
//   <>
//     <Drawer.Screen
//       name="Reception"
//       component={Reception}
//       options={{
//         title: 'Reception',
//         drawerIcon: () => (
//           <Icon name="support-agent" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="Students"
//       component={Students}
//       options={{
//         title: 'Students Management',
//         drawerIcon: () => (
//           <Icon name="school" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="Staffs"
//       component={Staffs}
//       options={{
//         title: 'Staffs Management',
//         drawerIcon: () => (
//           <Icon name="people" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//   </>
// )}
// <Drawer.Screen
//   name="Academic"
//   component={Academic}
//   options={{
//     title: 'Academics',
//     drawerIcon: () => (
//       <Icon name="school" size={24} color={COLORS.secondary} />
//     ),
//   }}
// />

// {user.role === 'admin' && (
//   <>
//     <Drawer.Screen
//       name="Exams&Records"
//       component={Results}
//       options={{
//         title: 'Exams & Records',
//         drawerIcon: () => (
//           <Icon name="bar-chart" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="FeesStructures"
//       component={Fees}
//       options={{
//         title: 'Fees Management',
//         drawerIcon: () => (
//           <Icon
//             name="account-balance-wallet"
//             size={24}
//             color={COLORS.secondary}
//           />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="Attendance"
//       component={AttendanceOption}
//       options={{
//         title: 'Attendance Management',
//         drawerIcon: () => (
//           <Icon name="poll" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="Exam"
//       component={Exam}
//       options={{
//         title: 'Online Examination Management',
//         drawerIcon: () => (
//           <Icon name="post-add" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//     <Drawer.Screen
//       name="Hostel"
//       component={Hostel}
//       options={{
//         title: 'Hostel Management',
//         drawerIcon: () => (
//           <Icon name="apartment" size={24} color={COLORS.secondary} />
//         ),
//       }}
//     />
//   </>
// )}

// <Drawer.Screen
//   name="Chat"
//   component={Chat}
//   options={{
//     title: 'Messenger',
//     drawerIcon: () => (
//       <Icon name="chat" size={24} color={COLORS.secondary} />
//     ),
//     headerRight: () => (
//       <BorderlessButton
//         onPress={() =>
//           navigation.navigate('Notification', {notifications})
//         }>
//         <View style={styles.header}>
//           <Icon name="notifications" size={28} color={COLORS.secondary} />
//           <View style={styles.badge}>
//             <Text style={styles.badgeText}>{notifications.length}</Text>
//           </View>
//         </View>
//       </BorderlessButton>
//     ),
//   }}
// />

// <Drawer.Screen
//   name="Logout"
//   component={Logout}
//   options={{
//     title: 'Logout',
//     drawerIcon: () => (
//       <Icon name="logout" size={24} color={COLORS.secondary} />
//     ),
//   }}
// />