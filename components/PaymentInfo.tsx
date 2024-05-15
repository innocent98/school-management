import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {style} from '../constants/style';
import FocusedStatusBar from './FocusedStatusBar';
import MediumText from './widgets/MediumText';
import SmallText from './widgets/SmallText';
import ScreenSizes from '../constants/utils/ScreenSizes';
import {FONTS} from '../constants/theme';

const PaymentInfo = () => {
  const {itemWidth, itemHeight} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={style.container}>
          <View style={[style.column, {alignItems: 'flex-start'}]}>
            <MediumText text="Payment Infomation" />

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.light.lightgray,
              }}></View>

            <SmallText
              text="Payments can be made in school or transferred to our designated
            accounts below"
              textAlign={'left'}
            />

            <MediumText text="CFA ACCOUNT AND PAYMENT:" />

            <View style={style.row}>
              <SmallText text="BANK NAME:" />
              <SmallText text="CORIS BANK" fontFamily={FONTS.semi_bold} />
            </View>

            <View style={style.row}>
              <SmallText text="BRANCH:" />
              <SmallText
                text="HEDRANAWOE (School's building)"
                fontFamily={FONTS.semi_bold}
              />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NAME:" />
              <SmallText text="IAEC" fontFamily={FONTS.semi_bold} />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NUMBER:" />
              <SmallText text="004649324101" fontFamily={FONTS.semi_bold} />
            </View>

            <MediumText text="NAIRA ACCOUNT AND PAYMENT:" />

            <View style={style.row}>
              <SmallText text="BANK NAME:" />
              <SmallText
                text="ZENITH BANK NIGERIA"
                fontFamily={FONTS.semi_bold}
              />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NAME:" />
              <SmallText text="IAEC UNIVERS" fontFamily={FONTS.semi_bold} />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NUMBER:" />
              <SmallText text="1218699004" fontFamily={FONTS.semi_bold} />
            </View>

            <View style={style.row}>
              <SmallText text="BANK NAME:" />
              <SmallText
                text="ACCESS BANK NIGERIA"
                fontFamily={FONTS.semi_bold}
              />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NAME:" />
              <SmallText text="IAEC UNIVERS" fontFamily={FONTS.semi_bold} />
            </View>

            <View style={style.row}>
              <SmallText text="ACCOUNT NUMBER:" />
              <SmallText text="0817621889" fontFamily={FONTS.semi_bold} />
            </View>

            <MediumText text="NOTICE:" />

            <SmallText
              text="Other fees, Tuition fees in CFA, Hostel fees, Carry-over fees,
              Malpratice fees, Industrial Training fees should be paid to the
              above CFA account."
              textAlign={'left'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentInfo;
