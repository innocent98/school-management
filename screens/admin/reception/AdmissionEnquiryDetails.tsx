import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import LogoBanner from '../../../components/LogoBanner';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import SmallText from '../../../components/widgets/SmallText';

const AdmissionEnquiryDetails = () => {
  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={[style.container, {}]}>
          <LogoBanner />

          <View
            style={[
              style.column,
              {alignItems: 'flex-start', gap: SIZES.l, marginTop: SIZES.xl},
            ]}>
            <View style={style.row}>
              <SmallText text="Staus:" />
              <SmallText text="Open" />
            </View>

            <View style={style.row}>
              <SmallText text="Name:" />
              <SmallText text="Name 1" />
            </View>

            <View style={style.row}>
              <SmallText text="Contact Number:" />
              <SmallText text="123456789" />
            </View>

            <View style={style.row}>
              <SmallText text="Email:" />
              <SmallText text="mail@gmail.com" />
            </View>

            <View style={style.row}>
              <SmallText text="Date of Enquiry:" />
              <SmallText text="2/2/2022" />
            </View>

            <View style={style.row}>
              <SmallText text="Enquiry Type:" />
              <SmallText text="Self Enquiry" />
            </View>

            <View style={style.row}>
              <SmallText text="Enquiry Source:" />
              <SmallText text="Social media" />
            </View>

            <View style={[style.row, {alignItems: 'flex-start'}]}>
              <SmallText text="Enquiry Details:" />
              <View style={{width: '70%'}}>
                <SmallText
                  text=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum."
                  textAlign={'left'}
                />
              </View>
            </View>

            <View style={style.row}>
              <SmallText text="Remark:" />
              <SmallText text="Remark" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionEnquiryDetails;
