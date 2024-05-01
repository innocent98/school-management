import {View, Animated, Pressable} from 'react-native';
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
      <View style={[style.column, {alignItems: 'flex-start', gap: SIZES.base}]}>
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
    </Animated.View>
  );
};

export default StudentDrawer;
