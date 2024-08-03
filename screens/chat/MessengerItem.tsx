import {View, Image} from 'react-native';
import React from 'react';
import SmallText from '../../components/widgets/SmallText';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import {dp} from '../../constants/utils/vars';

type Props = {
  isSender: boolean;
};

const MessengerItem = (props: Props) => {
  return (
    <View
      style={[
        style.row,
        {
          width: '100%',
          gap: SIZES.small,
          flexDirection: props.isSender ? 'row-reverse' : 'row',
          alignItems: 'flex-end',
        },
      ]}>
      <Image
        source={{
          uri: dp,
        }}
        style={style.profilePic}
      />

      <View
        style={[
          style.column,
          {
            alignItems: props.isSender ? 'flex-end' : 'flex-start',
            gap: SIZES.nano,
          },
        ]}>
        <SmallText text="Maxim" />

        <View
          style={
            props.isSender ? style.senderMessageCard : style.receiverMessageCard
          }>
          <SmallText
            text="Hey, I'm still waiting for the keys. Can you check if they are
                  still here?"
            textAlign={'left'}
            textColor={props.isSender ? COLORS.light.white : COLORS.light.black}
          />
        </View>
      </View>
    </View>
  );
};

export default MessengerItem;
