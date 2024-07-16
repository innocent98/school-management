import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {courseList} from '../../../constants/dummy';
import Input from '../../../components/widgets/Input';
import {COLORS, SIZES} from '../../../constants';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import SmallText from '../../../components/widgets/SmallText';
import LogoBanner from '../../../components/LogoBanner';
import {NavigationProp} from '../../../constants/utils/navigationProp';

const ResultDetails = ({route}: any) => {
  const {item} = route.params;

  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

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

            <SmallText text="tap to see students who sat for the exam" />

            <View
              style={[
                style.column,
                {
                  width: '100%',
                  alignItems: 'flex-start',
                  marginTop: SIZES.l,
                  gap: SIZES.xl,
                },
              ]}>
              {courseList.map(course => (
                <SmallText
                  text={course.code}
                  textAlign={'left'}
                  key={course.id}
                  onPress={() => navigation.navigate('ResultAttendance')}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultDetails;
