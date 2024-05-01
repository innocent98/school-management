import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {style} from '../constants/style';
import FocusedStatusBar from '../components/FocusedStatusBar';
import LogoBanner from '../components/LogoBanner';
import SlideAnimation from '../components/SlideAnimation';
import StudentDrawer from '../components/StudentDrawer';
import TopComponent from '../components/TopComponent';
import SmallText from '../components/widgets/SmallText';
import MediumText from '../components/widgets/MediumText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.container, {gap: SIZES.l}]}>
          <LogoBanner />

          <View style={style.card}>
            <View style={[style.card, {backgroundColor: COLORS.light.primary}]}>
              <MediumText text="My Details" />
            </View>

            <View
              style={[
                style.column,
                {alignItems: 'flex-start', marginTop: SIZES.extraLarge},
              ]}>
              <View style={style.row}>
                <MediumText
                  text="Enrollment ID:"
                  textColor={COLORS.light.black}
                />
                <SmallText
                  text="IAEC/ADM/19/10589"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText text="Name:" textColor={COLORS.light.black} />
                <SmallText
                  text="ADEBAYO VICTOR OLUWATOSIN"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText text="Course:" textColor={COLORS.light.black} />
                <SmallText
                  text="COMPUTER SCIENCE"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText text="Batch:" textColor={COLORS.light.black} />
                <SmallText
                  text="400 LEVEL ( SUMMER 2021/2022 )"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText
                  text="Batch Status:"
                  textColor={COLORS.light.black}
                />
                <SmallText
                  text="Current Batch"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText
                  text="Students Level:"
                  textColor={COLORS.light.black}
                />
                <SmallText text="300 SECOND" textColor={COLORS.light.black} />
              </View>

              <View style={style.row}>
                <MediumText
                  text="Students Email:"
                  textColor={COLORS.light.black}
                />
                <SmallText
                  text="tosinadebayo55@gmail.com"
                  textColor={COLORS.light.black}
                />
              </View>

              <View style={style.row}>
                <MediumText text="ID Card:" textColor={COLORS.light.black} />
                <MaterialIcons
                  name="print"
                  size={24}
                  color={COLORS.light.primary}
                />
              </View>

              <View style={style.row}>
                <MediumText
                  text="Admission Detail:"
                  textColor={COLORS.light.black}
                />
                <MaterialIcons
                  name="print"
                  size={24}
                  color={COLORS.light.primary}
                />
              </View>

              {/* <Text style={styles.detailsTitle}>Certificates</Text> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
