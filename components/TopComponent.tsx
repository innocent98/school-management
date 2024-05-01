import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants';
import {style} from '../constants/style';
import ScreenSizes from '../constants/utils/ScreenSizes';

interface Props {
  slideIn: () => void;
}

const TopComponent: React.FC<Props> = ({slideIn}) => {
  const {itemWidth} = ScreenSizes();
  return (
    <View style={[style.rowSpace, {padding: itemWidth * 0.03}]}>
      <MaterialIcons
        name="menu"
        size={SIZES.xl}
        color={COLORS.light.white}
        onPress={slideIn}
      />
      <MaterialIcons
        name="notifications"
        size={SIZES.xl}
        color={COLORS.light.white}
      />
    </View>
  );
};

export default TopComponent;
