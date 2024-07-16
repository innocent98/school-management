import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomImage from '../../../constants/utils/CustomImage';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import SmallText from '../../../components/widgets/SmallText';

type ParamsProps = {
  item: {name: string; code: string; level: string; sex: string};
};

const BasicInformation = ({route}: any) => {
  const {item} = route.params as ParamsProps;
  const navigation = useNavigation();

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
            <SmallText text={`First Name: ${item.name}`} />
            <SmallText text={`Other Names: ${item.name}`} />
            <SmallText text={`Matric No: ${item.code}`} />
            <SmallText text={`Gender: ${item.sex}`} />
            <SmallText text={`Date of Birth: ${item.sex}`} />
            <SmallText text={`Place of Birth: ${item.sex}`} />
            <SmallText text={`Nationality: ${item.level}`} />
            <SmallText text={`LGA: ${item.level}`} />
            <SmallText text={`Religion: ${item.level}`} />
            <SmallText text={`Language: ${item.level}`} />
            <SmallText text={`Blood Group: ${item.level}`} />
            <SmallText text={`Genotype: ${item.level}`} />
            <SmallText text={`Disability: ${item.level}`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInformation;
