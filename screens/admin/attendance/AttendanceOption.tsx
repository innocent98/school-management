import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import SmallText from '../../../components/widgets/SmallText';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';

const AttendanceOption = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <View style={style.container}>
        <LogoBanner />

        <View style={[style.column, {marginTop: SIZES.xxxl, gap: SIZES.small}]}>
          <SmallText text="Select Attendance To Take" />

          <Button
            btnText={'Class Attendance'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.8}
            onPress={() => navigation.navigate('StudentAttendance')}
          />

          <Button
            btnText={'Exam Attendance'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.8}
            onPress={() => navigation.navigate('StudentExamAttendance')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AttendanceOption;
