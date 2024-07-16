/* eslint-disable react-native/no-inline-styles */
import {View, Animated, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {style} from '../constants/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants';
import MediumText from './widgets/MediumText';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenParamLists} from '../navigations/Navigations';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = StackNavigationProp<ScreenParamLists>;

interface Props {
  slideAnim: Animated.Value;
  slideOut: () => void;
}

const navigationData = [
  {id: 1, icon: 'dashboard', text: 'Home', path: 'Home'},
  {id: 2, icon: 'account-circle', text: 'Profile', path: 'Profile'},
  {id: 3, icon: 'book', text: 'My Courses', path: 'MyCourse'},
  {id: 4, icon: 'bar-chart', text: 'My Results', path: 'MyResults'},
  {id: 5, icon: 'account-balance-wallet', text: 'My Fees', path: 'MyFees'},
  {
    id: 6,
    icon: 'school',
    text: 'Course Registration',
    path: 'CourseRegistration',
  },
  {id: 7, icon: 'work', text: 'Project', path: 'Project'},
  {id: 8, icon: 'local-library', text: 'E-Library', path: 'ELibrary'},
  {
    id: 9,
    icon: 'app-registration',
    text: 'Exam Registration',
    path: 'ExamRegistration',
  },
  {id: 10, icon: 'school', text: 'Academic', path: 'Academic'},
  {id: 11, icon: 'support-agent', text: 'Reception', path: 'Reception'},
  {id: 12, icon: 'school', text: 'Students Management', path: 'Students'},
];

const StudentDrawer: React.FC<Props> = ({slideAnim, slideOut}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigation = (to: any) => {
    slideOut();
    navigation.navigate(to);
  };

  return (
    <Animated.View
      style={[style.drawer, {transform: [{translateX: slideAnim}]}]}>
      <MaterialIcons
        name="close"
        color={COLORS.light.secondary}
        size={SIZES.xl}
        style={{position: 'absolute', right: -30}}
        onPress={slideOut}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[style.column, {alignItems: 'flex-start', gap: SIZES.base}]}>
          {navigationData.map(item => (
            <Pressable
              key={item.id}
              style={style.drawerItem}
              onPress={() => handleNavigation(item.path)}>
              <MaterialIcons
                name={item.icon}
                size={SIZES.xl}
                color={COLORS.light.primary}
              />
              <MediumText text={item.text} textColor={COLORS.light.primary} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default StudentDrawer;
