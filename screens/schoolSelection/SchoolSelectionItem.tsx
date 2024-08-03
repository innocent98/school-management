import {View, Image, Pressable} from 'react-native';
import React from 'react';
import MediumText from '../../components/widgets/MediumText';
import SmallText from '../../components/widgets/SmallText';
import {SIZES, COLORS} from '../../constants';
import {style} from '../../constants/style';
import {dp} from '../../constants/utils/vars';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../constants/utils/navigationProp';

const SchoolSelectionItem = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable style={style.row} onPress={() => navigation.navigate('Home')}>
      <Image
        source={{
          uri: dp,
        }}
        style={[style.chatDp, {borderRadius: 10}]}
      />

      <View style={[style.column, {alignItems: 'flex-start', gap: SIZES.nano}]}>
        <MediumText
          text="Westborough High School"
          textColor={COLORS.light.black}
        />
        <SmallText text="Westborough, MA" textColor={COLORS.light.gray} />
      </View>
    </Pressable>
  );
};

export default SchoolSelectionItem;
