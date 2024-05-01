import React from 'react';
import Login from './screens/Login';
import {useSelector} from 'react-redux';
import StudentStackNavigator from './navigations/StudentStackNavigator';

const MainApp = () => {
  const user = useSelector(state => state.user.currentUser);

  return user ? <StudentStackNavigator /> : <Login />;
};

export default MainApp;
