import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {styles} from '../styles';
import {style} from '../style';

type Props = {
  imageUrl: string;
};

const CustomImage = (props: Props) => {
  return (
    <FastImage
      style={[style.displayPic, {alignSelf: 'center'}]}
      source={{
        uri: props.imageUrl,
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default CustomImage;
