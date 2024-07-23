import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLORS, SIZES, student} from '../../../constants';
import {style} from '../../../constants/style';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import Input from '../../../components/widgets/Input';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import SmallText from '../../../components/widgets/SmallText';
import Attendance from './Attendance';

type ParamProps = {
  item: {
    week: any;
    course: any;
  };
};

const TakeClassAttendance = ({route}: any) => {
  const {item} = route.params as ParamProps;

  const {itemWidth} = ScreenSizes();

  const weekData = item.week;

  const renderItem = ({
    item,
  }: {
    item: React.ComponentProps<typeof Attendance>;
  }) => <Attendance {...item} {...weekData} />;

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.large, marginTop: SIZES.xl}]}>
            <Input
              placeholder={'Search student with matric no...'}
              placeholderColor={COLORS.light.white}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.white}
            />

            <SmallText text="Select icon to take student attendance" />

            {/* table */}
            <View style={style.card}>
              <ScrollView horizontal={true}>
                <FlatList
                  data={student}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
                  ListHeaderComponent={() => (
                    <View style={style.tableHead}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>Student Name</Text>
                      <Text style={style.tableItem}>Matric No</Text>
                      <Text style={style.tableItem}>{item.week.week}</Text>
                    </View>
                  )}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TakeClassAttendance;
