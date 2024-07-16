import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, student} from '../../../constants';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import Input from '../../../components/widgets/Input';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import SmallText from '../../../components/widgets/SmallText';

const ResultAttendance = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Input
              placeholder={'Search student...'}
              placeholderColor={COLORS.light.white}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.white}
            />

            <View
              style={[
                style.column,
                {width: '100%', alignItems: 'flex-start', marginTop: SIZES.l},
              ]}>
              {student.map(item => (
                <View key={item.id}>
                  <SmallText text={item.name} textAlign={'left'} />
                  <SmallText text={item.code} textAlign={'left'} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultAttendance;
