import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import CustomImage from '../../../constants/utils/CustomImage';
import Button from '../../../components/widgets/Button';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import SmallText from '../../../components/widgets/SmallText';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';

type ParamsProps = {
  item: {name: string; code: string; level: string};
};

const StaffProfile = ({route}: any) => {
  const {itemWidth} = ScreenSizes();

  const {item} = route.params as ParamsProps;

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={[style.container, {gap: SIZES.l}]}>
          <LogoBanner />

          <CustomImage imageUrl="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />

          <View
            style={[
              style.column,
              {gap: SIZES.xl, marginTop: SIZES.xl, alignItems: 'flex-start'},
            ]}>
            <SmallText text={`Staff Name: ${item.name}`} />
            <SmallText text={`Staff Role: ${item.name}`} />
            <SmallText text={`Gender: ${item.name}`} />
            <SmallText text={`Email: ${item.name}`} />
            <SmallText text={`Contact No: ${item.name}`} />
            <SmallText text={`Residential Address: ${item.name}`} />

            <View style={{alignSelf: 'center'}}>
              <Button
                btnText={"Disable Staff's portal"}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.red}
                width={itemWidth * 0.7}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StaffProfile;
