import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {courses} from '../../constants';
import {style} from '../../constants/style';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import SlideAnimation from '../../components/SlideAnimation';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import BigText from '../../components/widgets/BigText';
import Button from '../../components/widgets/Button';
import ScreenSizes from '../../constants/utils/ScreenSizes';

const MyCourse = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.container, {gap: SIZES.l}]}>
          <LogoBanner />

          <View style={[style.card]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[style.column]}>
                <BigText text="My Course List" textColor={COLORS.light.black} />

                <Button
                  btnText={'PRINT MY COURSE SHEET'}
                  textColor={COLORS.light.white}
                  buttonColor={COLORS.light.primary}
                  width={itemWidth * 0.5}
                  onPress={() => {}}
                />

                {/* table */}
                <ScrollView horizontal={true}>
                  <View style={style.table}>
                    <View style={style.tableHead}>
                      <Text
                        style={[
                          style.tableItem,
                          {width: itemWidth * 0.6, textAlign: 'left'},
                        ]}>
                        Course Title
                      </Text>
                      <Text style={style.tableItem}>Course Code</Text>
                      <Text style={style.tableItem}>Units</Text>
                      <Text style={style.tableItem}>Action</Text>
                    </View>
                    {courses.map(course => (
                      <View style={style.tableBody} key={course.id}>
                        <Text
                          style={[
                            style.tableItem,
                            {width: itemWidth * 0.6, textAlign: 'left'},
                          ]}>
                          {course.title}
                        </Text>
                        <Text style={style.tableItem}>{course.code}</Text>
                        <Text style={style.tableItem}>{course.unit}</Text>
                        <Text style={style.tableItem}>Action</Text>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCourse;
