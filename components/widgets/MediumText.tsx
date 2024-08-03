import {Text} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import {COLORS} from '../../constants';
import {FONTS} from '../../constants/theme';

type Props = {
  text: string;
  textColor?: string;
  textAlign?: any;
  fontFamily?: string;
  onPress?: () => void;
};

const MediumText = (props: Props) => {
  return (
    <Text
      style={[
        style.mediumText,
        {
          color: props.textColor || COLORS.light.white,
          textAlign: props.textAlign || 'center',
          fontFamily: props.fontFamily || FONTS.bold,
        },
      ]}
      onPress={props.onPress}>
      {props.text}
    </Text>
  );
};

export default MediumText;
