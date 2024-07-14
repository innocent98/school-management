import {Pressable} from 'react-native';
import React from 'react';
import {style} from '../../constants/style';
import SmallText from './SmallText';

type Props = {
  btnText: string;
  textColor: string;
  buttonColor: string;
  width?: number;
  alignItems?: any;
  disabled?: boolean;
  onPress: () => void;
};

const Button = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.disabled || false}
      style={[
        style.button,
        {
          backgroundColor: props.buttonColor,
          width: props.width,
          alignItems: props.alignItems || 'center',
        },
      ]}>
      <SmallText text={props.btnText} textColor={props.textColor} />
    </Pressable>
  );
};

export default Button;
