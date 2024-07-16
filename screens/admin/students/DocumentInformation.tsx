import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import CustomImage from '../../../constants/utils/CustomImage';
import SmallText from '../../../components/widgets/SmallText';

type ParamsProps = {
  item: {name: string; code: string; level: string; sex: string};
};

const DocumentInformation = ({route}: any) => {
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
            <SmallText
              text={`National Means of Identification: ${item.name}`}
            />
            <SmallText text={`SSCE Type 1: ${item.name}`} />
            <SmallText text={`SSCE Type 2: ${item.name}`} />
            <SmallText text={`Birth Certificate: ${item.name}`} />
            <SmallText text={`Transcript: ${item.name}`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentInformation;
