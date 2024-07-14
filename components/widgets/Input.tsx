import {KeyboardType, TextInput} from 'react-native';
import React from 'react';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import {COLORS, FONTS} from '../../constants/theme';

type Props = {
  placeholder: string;
  placeholderColor: string;
  borderColor: string;
  width: number;
  color: string;
  defaultValue?: any;
  backgroundColor?: string;
  multiline?: boolean;
  onPressIn?: (value: any) => void;
  value?: any;
  keyboardType?: KeyboardType
};

const Input = (props: Props) => {
  const {itemWidth} = ScreenSizes();
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderColor}
      cursorColor={COLORS.light.secondary}
      defaultValue={props.defaultValue}
      multiline={props.multiline}
      onPressIn={props.onPressIn}
      value={props.value}
      keyboardType={props.keyboardType}
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: props.borderColor,
        width: props.width,
        color: props.color,
        paddingHorizontal: itemWidth * 0.02,
        fontFamily: FONTS.regular,
        backgroundColor: props.backgroundColor,
      }}
    />
  );
};

export default Input;
