import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {courseList} from '../../../constants/dummy';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import SlideAnimation from '../../../components/SlideAnimation';
import LogoBanner from '../../../components/LogoBanner';
import Input from '../../../components/widgets/Input';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import SmallText from '../../../components/widgets/SmallText';
import {NavigationProp} from '../../../constants/utils/navigationProp';

const Exam = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth} = ScreenSizes();

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

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Input
              placeholder={'Search with course code...'}
              placeholderColor={COLORS.light.white}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.white}
            />

            <SmallText text="Select course to set exam" />

            <View
              style={[
                style.column,
                {
                  width: '100%',
                  alignItems: 'flex-start',
                  marginTop: SIZES.large,
                  gap: SIZES.l,
                },
              ]}>
              {courseList.map(course => (
                <SmallText
                  text={course.code}
                  textAlign={'left'}
                  onPress={() => navigation.navigate('ExamEditor')}
                  key={course.id}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exam;
