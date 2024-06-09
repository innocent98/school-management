import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import SmallText from './SmallText';

interface Props {
  btnText: string;
  textColor: string;
  buttonColor: string;
  width?: number;
  alignItems?: any;
  disabled?: boolean;

  onPress: () => void;
}

const Button: React.FC<Props> = ({
  buttonColor,
  btnText,
  textColor,
  width,
  disabled,
  alignItems,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || false}
      style={[
        style.button,
        {
          backgroundColor: buttonColor,
          width,
          alignItems: alignItems || 'center',
        },
      ]}>
      <SmallText text={btnText} textColor={textColor} />
    </Pressable>
  );
};

export default Button;
