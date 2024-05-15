import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import {COLORS} from '../../constants';
import { FONTS } from '../../constants/theme';

interface Props {
  text: string;
  textColor?: string;
  textAlign?: any;
  fontFamily?: string;
  onPress?: () => void;
}

const BigText: React.FC<Props> = ({text, textColor, textAlign, fontFamily, onPress}) => {
  return (
    <Text
      style={[
        style.bigText,
        {
          color: textColor || COLORS.light.white,
          textAlign: textAlign || 'center',
          fontFamily: fontFamily || FONTS.bold
        },
      ]}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default BigText;
