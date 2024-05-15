import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import {NavigationProp} from '../../../constants/utils/navigationProp';

const Academic = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View
            style={[
              style.column,
              {alignItems: 'flex-start', gap: SIZES.nano, marginTop: SIZES.xl},
            ]}>
            <Button
              btnText={'Timetable'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Timetable');
              }}
            />

            <Button
              btnText={'Calendar'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Calendar');
              }}
            />

            <Button
              btnText={'Academic Session/Semester'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('AcademicSession');
              }}
            />

            <Button
              btnText={'Faculties'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Faculties');
              }}
            />

            <Button
              btnText={'Curriculum'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Curriculum');
              }}
            />

            <Button
              btnText={'Assignment'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Assignment');
              }}
            />

            <Button
              btnText={'Events/Holidays'}
              textColor={COLORS.light.white}
              buttonColor={'transparent'}
              onPress={() => {
                navigation.navigate('Calendar');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Academic;
