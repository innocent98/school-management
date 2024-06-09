import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import {COLORS, FONTS} from '../../constants/theme';

interface Props {
  placeholder: string;
  placeholderColor: string;
  borderColor: string;
  width: number;
  color: string;
  defaultValue?: any;
  backgroundColor?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  placeholderColor,
  borderColor,
  width,
  color,
  defaultValue,
  backgroundColor,
}) => {
  const {itemWidth} = ScreenSizes();
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      cursorColor={COLORS.light.gray}
      defaultValue={defaultValue}
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor,
        width,
        color,
        paddingHorizontal: itemWidth * 0.02,
        fontFamily: FONTS.regular,
        backgroundColor
      }}
    />
  );
};

export default Input;
