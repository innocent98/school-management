import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import SlideAnimation from '../../components/SlideAnimation';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import MediumText from '../../components/widgets/MediumText';
import {FONTS} from '../../constants/theme';
import Button from '../../components/widgets/Button';

const CourseRegistration = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <View style={[style.container, {gap: SIZES.l}]}>
        <LogoBanner />

        <View style={style.card}>
          <MediumText
            text="Select Your Course and Register"
            textColor={COLORS.light.black}
          />

          <MultipleSelectList
            setSelected={(value: any) => setSelected(value)}
            data={data}
            save="value"
            // onSelect={() => alert(selected)}
            label="Selected courses"
            inputStyles={{color: COLORS.light.black}}
            dropdownTextStyles={{color: COLORS.light.black}}
            fontFamily={FONTS.regular}
            boxStyles={{width: '100%'}}
            labelStyles={{color: COLORS.light.black}}
            badgeStyles={{backgroundColor: COLORS.light.primary}}
          />

          <Button
            btnText={'Proceed'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.primary}
            width={itemWidth * 0.4}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseRegistration;
