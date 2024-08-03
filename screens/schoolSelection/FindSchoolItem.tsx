import {View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import {dp} from '../../constants/utils/vars';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import SmallText from '../../components/widgets/SmallText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../constants/utils/navigationProp';

const FindSchoolItem = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Home')}
      style={[style.column, {gap: SIZES.nano, alignItems: 'flex-start'}]}>
      <Image
        source={{
          uri: dp,
        }}
        style={[
          {
            borderRadius: 10,
            width: itemWidth * 0.44,
            height: itemWidth * 0.44,
          },
        ]}
      />
      <SmallText
        text="Stanford University"
        textColor={COLORS.light.black}
        textAlign={'left'}
      />
    </Pressable>
  );
};

export default FindSchoolItem;
