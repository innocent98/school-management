import React from 'react';
import FastImage from 'react-native-fast-image';
import {style} from '../constants/style';

const LogoBanner = () => {
  return (
    <FastImage
      style={style.logoBanner}
      source={{
        uri: 'https://iaec-university.tg/wp-content/uploads/2020/01/iaec-university-logo.png',
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default LogoBanner;
