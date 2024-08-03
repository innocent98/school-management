import React from 'react';
import {TextInput} from 'react-native-paper';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';

type Props = {
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
};

const InputPaper = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  return (
    <TextInput
      label={props.label}
      placeholderTextColor={props.placeholderTextColor}
      style={[
        style.input,
        {
          backgroundColor: props.backgroundColor,
          width: props.width || itemWidth * 0.9,
        },
      ]}
      onChangeText={props.onChangeText}
      autoCapitalize={props.autoCapitalize || 'none'}
      autoCorrect={false}
      mode={props.mode || 'outlined'}
      secureTextEntry={props.secureTextEntry}
      activeOutlineColor={props.activeOutlineColor}
      keyboardType={props.keyboardType}
    />
  );
};

export default InputPaper;
