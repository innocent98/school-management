import {Animated} from 'react-native';
import {useRef} from 'react';

const SlideAnimation = () => {
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true, // This is important for performance
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -1000,
      duration: 500,
      useNativeDriver: true, // This is important for performance
    }).start();
  };
  return {slideAnim, slideIn, slideOut};
};

export default SlideAnimation;
