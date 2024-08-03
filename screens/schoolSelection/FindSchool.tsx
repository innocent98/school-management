import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import MediumText from '../../components/widgets/MediumText';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import BigText from '../../components/widgets/BigText';
import {dp} from '../../constants/utils/vars';
import FindSchoolItem from './FindSchoolItem';
import Input from '../../components/widgets/Input';

const FindSchool = () => {
  const {itemWidth} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.white}]}>
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={'dark-content'}
      />

      <View style={[style.container, {flex: 1, gap: SIZES.l}]}>
        <MediumText text="Find your school" textColor={COLORS.light.black} />

        <Input
          placeholder={'Search for a school'}
          placeholderColor={COLORS.light.gray}
          borderColor={COLORS.light.transparent}
          backgroundColor={COLORS.light.soft}
          width={itemWidth * 0.9}
          color={COLORS.light.gray}
        />

        <ScrollView>
          <View
            style={[
              style.column,
              {
                gap: SIZES.l,
                alignItems: 'flex-start',
                marginTop: SIZES.base,
                paddingBottom: itemWidth * 0.06,
                height: 'auto',
              },
            ]}>
            <BigText text="Popular Schools" textColor={COLORS.light.black} />

            <View style={[style.row, {flexWrap: 'wrap'}]}>
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
            </View>

            <BigText text="Other Schools" textColor={COLORS.light.black} />

            <View style={[style.row, {flexWrap: 'wrap'}]}>
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
              <FindSchoolItem />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FindSchool;
