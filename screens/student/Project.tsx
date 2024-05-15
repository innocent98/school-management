import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import SlideAnimation from '../../components/SlideAnimation';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import MediumText from '../../components/widgets/MediumText';
import SmallText from '../../components/widgets/SmallText';
import InputPaper from '../../components/widgets/InputPaper';
import Input from '../../components/widgets/Input';
import Button from '../../components/widgets/Button';

const Project = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <View style={[style.container, {gap: SIZES.l}]}>
        <LogoBanner />

        <View style={[style.card, {gap: SIZES.l}]}>
          <MediumText
            text="Enter your final year project topic"
            textColor={COLORS.light.black}
          />

          <View style={style.column}>
            <Input
              placeholder={'Project Topic 1'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.gray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
            />

            <Input
              placeholder={'Project Topic 2'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.gray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
            />

            <Input
              placeholder={'Project Topic 3'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.gray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
            />

            <Button
              btnText={'SUBMIT'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.primary}
              width={itemWidth * 0.4}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Project;
