import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../../constants/utils/navigationProp';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../../constants';
import {style} from '../../../../constants/style';
import LogoBanner from '../../../../components/LogoBanner';
import MediumText from '../../../../components/widgets/MediumText';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';

const TimetableOption = () => {
  const {itemWidth, itemHeight} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <View style={style.container}>
        <LogoBanner />

        <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
          <MediumText text="Select Time" />

          <Button
            btnText={'8:00 - 10:00'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.9}
            onPress={() =>
              navigation.navigate('EditTimetable', {time: '8:00 - 10:00'})
            }
          />

          <Button
            btnText={'10:00 - 12:00'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.9}
            onPress={() =>
              navigation.navigate('EditTimetable', {time: '10:00 - 12:00'})
            }
          />

          <Button
            btnText={'12:00 - 14:00'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.9}
            onPress={() =>
              navigation.navigate('EditTimetable', {time: '12:00 - 14:00'})
            }
          />

          <Button
            btnText={'14:00 - 16:00'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.9}
            onPress={() =>
              navigation.navigate('EditTimetable', {time: '14:00 - 16:00'})
            }
          />

          <Button
            btnText={'16:00 - 18:00'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.9}
            onPress={() =>
              navigation.navigate('EditTimetable', {time: '16:00 - 18:00'})
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimetableOption;
