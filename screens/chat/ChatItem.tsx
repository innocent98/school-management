import {View, Image, Pressable} from 'react-native';
import React from 'react';
import MediumText from '../../components/widgets/MediumText';
import SmallText from '../../components/widgets/SmallText';
import {SIZES, COLORS} from '../../constants';
import {style} from '../../constants/style';
import {dp} from '../../constants/utils/vars';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../constants/utils/navigationProp';

const ChatItem = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
      style={[style.rowSpace, {width: '100%'}]}
      onPress={() => navigation.navigate('Messenger')}>
      <View style={[style.row]}>
        <Image
          source={{
            uri: dp,
          }}
          style={style.chatDp}
        />

        <View
          style={[style.column, {alignItems: 'flex-start', gap: SIZES.nano}]}>
          <MediumText text="Ethan" textAlign={'left'} />
          <SmallText
            text="hey"
            textColor={COLORS.light.soft}
            textAlign={'left'}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          />
        </View>
      </View>

      <SmallText
        text="3h ago"
        textColor={COLORS.light.soft}
        textAlign={'left'}
      />
    </Pressable>
  );
};

export default ChatItem;
