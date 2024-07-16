import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES, student} from '../../../constants';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import Input from '../../../components/widgets/Input';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import SmallText from '../../../components/widgets/SmallText';

const FeesStatus = () => {
  const {itemWidth} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Input
              placeholder={'Search fees...'}
              placeholderColor={COLORS.light.white}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.white}
            />

            <View
              style={[
                style.column,
                {
                  alignItems: 'flex-start',
                  gap: SIZES.l,
                  marginTop: SIZES.xl,
                  width: '100%',
                },
              ]}>
              {student.map(item => (
                <View
                  style={[
                    style.column,
                    {alignItems: 'flex-start', gap: SIZES.base},
                  ]}
                  key={item.id}>
                  <SmallText text={item.name} />

                  <View style={[style.rowSpace, {width: '100%'}]}>
                    <SmallText text={item.code} />
                    <SmallText text="paid: #20000 of #20000" />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeesStatus;
