import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import {COLORS} from '../../constants';

interface Props {
  text: string;
  textColor?: string;
  textAlign?: any;
  onPress?: () => void;
}

const SmallText: React.FC<Props> = ({text, textColor, textAlign, onPress}) => {
  return (
    <Text
      style={[
        style.smallText,
        {
          color: textColor || COLORS.light.white,
          textAlign: textAlign || 'center',
        },
      ]}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default SmallText;
