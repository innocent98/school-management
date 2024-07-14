import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';

const Reception = () => {
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
              {gap: SIZES.base, marginTop: SIZES.xl, alignItems: 'flex-start'},
            ]}>
            <Button
              btnText={'Admission Enquiry'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.transparent}
              onPress={() => navigation.navigate('AdmissionEnquiry')}
            />

            <Button
              btnText={'Visitor Log'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.transparent}
              onPress={() => navigation.navigate('VisitorLog')}
            />

            <Button
              btnText={'Call Log'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.transparent}
              onPress={() => navigation.navigate('CallLog')}
            />

            <Button
              btnText={'Complaint'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.transparent}
              onPress={() => navigation.navigate('Complaint')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reception;
