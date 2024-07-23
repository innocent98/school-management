import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {weeks} from '../../../constants/dummy';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import SmallText from '../../../components/widgets/SmallText';
import {NavigationProp} from '../../../constants/utils/navigationProp';

type ParamsProp = {
  item: {
    id: number;
    code: string;
  };
};

const AttendanceWeeks = ({route}: any) => {
  const {item} = route.params as ParamsProp;

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <SmallText text="select attendance week" />

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
              {weeks.map(week => (
                <SmallText
                  text={week.week}
                  textAlign={'left'}
                  onPress={() =>
                    navigation.navigate('TakeClassAttendance', {
                      item: {week, course: item},
                    })
                  }
                  key={week.id}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceWeeks;
