import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SHADOWS, SIZES, student} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CustomImage from '../../../constants/utils/CustomImage';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';
import SmallText from '../../../components/widgets/SmallText';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import AddStaff from './AddStaff';

const Staffs = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      {add && <AddStaff setAdd={setAdd} />}

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <View
              style={[
                style.rowSpace,
                {width: '100%', marginBottom: SIZES.font},
              ]}>
              <Button
                btnText={'+ Add New Staff'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.45}
                onPress={() => setAdd(true)}
              />

              <Input
                placeholder={'Search staff...'}
                placeholderColor={COLORS.light.white}
                borderColor={COLORS.light.lightgray}
                width={itemWidth * 0.45}
                color={COLORS.light.white}
              />
            </View>

            {/* staffs */}
            <View style={[style.row, {flexWrap: 'wrap', gap: SIZES.small}]}>
              {student.map(r => (
                <RectButton
                  style={[
                    style.outlineCard,
                    {
                      backgroundColor: COLORS.light.white,
                      borderWidth: 0,
                      ...SHADOWS.dark,
                      width: '48.5%',
                    },
                  ]}
                  key={r.id}>
                  <CustomImage imageUrl="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />
                  <SmallText text={r.name} textColor={COLORS.light.primary} />
                  <SmallText text={r.code} textColor={COLORS.light.primary} />

                  <SmallText
                    text="View Profile"
                    textColor={COLORS.light.primary}
                    onPress={() =>
                      navigation.navigate('StaffProfile', {item: r})
                    }
                  />
                </RectButton>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Staffs;
