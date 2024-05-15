import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import {COLORS} from '../../constants';
import {FONTS} from '../../constants/theme';

interface Props {
  text: string;
  textColor?: string;
  textAlign?: any;
  fontFamily?: string;
  onPress?: () => void;
}

const SmallText: React.FC<Props> = ({
  text,
  textColor,
  textAlign,
  fontFamily,
  onPress,
}) => {
  return (
    <Text
      style={[
        style.smallText,
        {
          color: textColor || COLORS.light.white,
          textAlign: textAlign || 'center',
          fontFamily: fontFamily || FONTS.regular,
        },
      ]}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default SmallText;
