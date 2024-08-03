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
  numberOfLines?: number;
  ellipsizeMode?: any;
  onPress?: () => void;
};

const SmallText = (props: Props) => {
  return (
    <Text
      style={[
        style.smallText,
        {
          color: props.textColor || COLORS.light.white,
          textAlign: props.textAlign || 'center',
          fontFamily: props.fontFamily || FONTS.regular,
        },
      ]}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}>
      {props.text}
    </Text>
  );
};

export default SmallText;
