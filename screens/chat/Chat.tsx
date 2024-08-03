import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import {dp} from '../../constants/utils/vars';
import MediumText from '../../components/widgets/MediumText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatItem from './ChatItem';

const Chat = () => {
  const {itemWidth} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <View
        style={[style.rowSpace, {width: '100%', padding: itemWidth * 0.035}]}>
        <Image
          source={{
            uri: dp,
          }}
          style={style.profilePic}
        />

        <MediumText text="Chats" />

        <MaterialIcons
          name="search"
          color={COLORS.light.white}
          size={SIZES.xl}
        />
      </View>

      <ScrollView>
        <View style={style.container}>
          {/* <LogoBanner /> */}

          <View
            style={[style.column, {gap: SIZES.l, alignItems: 'flex-start'}]}>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
