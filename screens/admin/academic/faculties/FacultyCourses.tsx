import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../../constants';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import Button from '../../../../components/widgets/Button';

const FacultyCourses = ({route}: any) => {
  const {itemWidth} = ScreenSizes();

  const {item} = route.params;

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={{marginTop: SIZES.xl}}>
            {item.courses.map((course: any) => (
              <Button
                btnText={course}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.transparent}
                width={itemWidth * 0.9}
                onPress={() => {}}
                key={course.id}
                alignItems={'flex-start'}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FacultyCourses;
