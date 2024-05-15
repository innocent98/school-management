import {SafeAreaView, Animated} from 'react-native';
import React, {useRef} from 'react';
import {style} from '../constants/style';
import FocusedStatusBar from '../components/FocusedStatusBar';
import TopComponent from '../components/TopComponent';
import Home from '../screens/student/Home';
import {COLORS} from '../constants';
import Drawer from '../components/StudentDrawer';

const DrawerTab = () => {
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true, // This is important for performance
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -1000,
      duration: 500,
      useNativeDriver: true, // This is important for performance
    }).start();
  };

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar />
      <TopComponent slideIn={slideIn} />
      <Drawer slideAnim={slideAnim} slideOut={slideOut} />

      <Home />
    </SafeAreaView>
  );
};

export default DrawerTab;
