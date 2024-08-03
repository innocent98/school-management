import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import MediumText from '../../components/widgets/MediumText';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import SmallText from '../../components/widgets/SmallText';
import MessengerItem from './MessengerItem';
import Input from '../../components/widgets/Input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Messenger = ({route}: any) => {
  const {itemWidth, itemHeight} = ScreenSizes();

  const navigation = useNavigation();

  const openLibrary = async (type: any) => {
    try {
      const res = await DocumentPicker.pick({
        type: [type],
      });
    } catch (error) {}
  };

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <View
        style={[style.rowSpace, {width: '55%', padding: itemWidth * 0.035}]}>
        <Ionicons
          name="arrow-back"
          color={COLORS.light.white}
          size={SIZES.l}
          onPress={() => navigation.goBack()}
        />

        <MediumText text="Tara" />
      </View>

      <ScrollView>
        <View style={style.container}>
          <View style={[style.column, {gap: SIZES.l, marginTop: SIZES.nano}]}>
            <SmallText
              text="Thursday 11:34 AM"
              textColor={COLORS.light.lightgray}
            />

            <MessengerItem isSender={false} />
            <MessengerItem isSender={true} />
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          style.row,
          {
            backgroundColor: COLORS.light.soft,
            gap: SIZES.small,
            maxHeight: itemHeight * 0.2,
          },
        ]}>
        <Input
          placeholder={'Message Tara'}
          placeholderColor={COLORS.light.gray}
          borderColor={COLORS.light.transparent}
          width={itemWidth * 0.7}
          color={COLORS.light.black}
          multiline
        />

        <MaterialIcons
          name="attach-file"
          size={20}
          color={COLORS.light.gray}
          onPress={() => openLibrary(DocumentPicker.types.pdf)}
        />

        <MaterialIcons
          name="photo-camera"
          size={20}
          color={COLORS.light.gray}
          onPress={() => openLibrary(DocumentPicker.types.images)}
        />

        <MaterialIcons name="send" size={24} color={COLORS.light.gray} />
      </View>
    </SafeAreaView>
  );
};

export default Messenger;
