import {PixelRatio, Dimensions} from 'react-native';

const fontScale = PixelRatio.getFontScale();

const getFontSize = (size: number) => size / fontScale;

const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const COLORS = {
  primary: '#F09A3E',
  secondary: '#1273AA',
  background: '#FDFEFE',
  white: '#fff',
  gray: '#74858C',
  card: '#dcf8c6',
  link: '#0000FF',

  light: {
    primary: '#1273AA',
    secondary: '#F09A3E',
    background: '#FDFEFE',
    card: '#dcf8c6',
    link: '#0000FF',
    backgroundSoft: 'rgba(4, 38, 57, 1)',
    soft: 'rgba(248, 248, 248, 1)',
    soft2: 'rgba(241, 241, 241, 1)',
    white: 'rgba(255, 255, 255, 1)',
    gray: 'rgba(127, 127, 127, 1)',
    darkGray: 'rgba(105, 105, 105, 1)',
    lightgray: 'rgba(196, 196, 196, 1)',
    black: 'rgba(26, 26, 26, 1)',
    red: 'rgba(254, 98, 98, 1)',
    success: 'rgba(38, 153, 105, 1)',
  },
  dark: {
    background: '#222',
    backgroundSoft: '#333',
    textSoft: '#F4F3F5',
    black: '#000000',
  },
};

export const SIZES = {
  nano: getFontSize(4),
  base: getFontSize(8),
  small: getFontSize(itemHeight * 0.015),
  font: getFontSize(itemHeight * 0.018),
  medium: getFontSize(itemHeight * 0.02),
  large: getFontSize(itemHeight * 0.022),
  extraLarge: getFontSize(itemHeight * 0.026),
  l: getFontSize(itemHeight * 0.03),
  xl: getFontSize(itemHeight * 0.04),
  xxl: getFontSize(itemHeight * 0.06),
  xxxl: getFontSize(itemHeight * 0.08),
  button: getFontSize(itemHeight * 0.2),
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const FONTS = {
  light: 'RobotoSlab-Light',
  regular: 'RobotoSlab-Regular',
  medium: 'RobotoSlab-Medium',
  semi_bold: 'RobotoSlab-SemiBold',
  bold: 'RobotoSlab-Bold',
  extra_bold: 'RobotoSlab-ExtraBold',
  black: 'RobotoSlab-Black',
};
