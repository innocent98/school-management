import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import SmallText from '../../../components/widgets/SmallText';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import CustomImage from '../../../constants/utils/CustomImage';

type ParamsProps = {
  item: {name: string; code: string; level: string; sex: string};
};

const ContactInformation = ({route}: any) => {
  const {item} = route.params as ParamsProps;

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={[style.container, {gap: SIZES.large}]}>
          <LogoBanner />

          <CustomImage imageUrl="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />

          <View
            style={[
              style.column,
              {gap: SIZES.xl, marginTop: SIZES.xl, alignItems: 'flex-start'},
            ]}>
            <SmallText text={`Phone Number: ${item.name}`} />
            <SmallText text={`Email: ${item.name}`} />
            <SmallText text={`Emergency Contact 1: ${item.name}`} />
            <SmallText text={`Emergency Contact 2: ${item.name}`} />
            <SmallText text={`Present Address: ${item.name}`} />
            <SmallText text={`Permanent Address: ${item.name}`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactInformation;
