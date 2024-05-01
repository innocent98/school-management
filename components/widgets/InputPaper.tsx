import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';

interface Props {
  label: string;
  placeholderTextColor: string;
  activeOutlineColor: string;
  backgroundColor: string;
  autoCapitalize?: any;
  mode?: any;
  width?: number;
  secureTextEntry?: boolean;
  keyboardType?: any;
  onChangeText: (value: any) => void;
}

const InputPaper: React.FC<Props> = ({
  label,
  placeholderTextColor,
  activeOutlineColor,
  backgroundColor,
  autoCapitalize,
  mode,
  width,
  secureTextEntry,
  keyboardType,
  onChangeText,
}) => {
  const {itemWidth} = ScreenSizes();

  return (
    <TextInput
      label={label}
      placeholderTextColor={placeholderTextColor}
      style={[style.input, {backgroundColor, width: width || itemWidth * 0.9}]}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize || 'none'}
      autoCorrect={false}
      mode={mode || 'outlined'}
      secureTextEntry={secureTextEntry}
      activeOutlineColor={activeOutlineColor}
      keyboardType={keyboardType}
    />
  );
};

export default InputPaper;
