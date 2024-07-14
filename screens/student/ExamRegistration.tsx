import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {style} from '../../constants/style';
import {COLORS, SIZES} from '../../constants/theme';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import SlideAnimation from '../../components/SlideAnimation';
import SmallText from '../../components/widgets/SmallText';
import MediumText from '../../components/widgets/MediumText';
import Input from '../../components/widgets/Input';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import Button from '../../components/widgets/Button';

const ExamRegistration = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView>
        <View style={[style.container, {gap: SIZES.l, alignItems: 'center'}]}>
          <LogoBanner />

          <View style={style.card}>
            <MediumText
              text="Register Your Exam"
              textColor={COLORS.light.primary}
            />

            <View style={{alignSelf: 'flex-start'}}>
              <SmallText text="Course Title" textColor={COLORS.light.black} />
            </View>

            <Input
              placeholder={'Enter your course title'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.gray}
              width={itemWidth * 0.8}
              color={COLORS.light.black}
            />

            <Button
              btnText={'SUBMIT'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamRegistration;
