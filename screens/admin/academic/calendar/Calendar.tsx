import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../../constants/styles';
import {COLORS, SIZES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {SavedData} from '../../students/EditStudent';
import {calendar} from '../../../../constants/dummy';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {style} from '../../../../constants/style';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import SmallText from '../../../../components/widgets/SmallText';
import {NavigationProp} from '../../../../constants/utils/navigationProp';
import AddCalendar from './AddCalendar';

const Calendar = () => {
  const {itemWidth, itemHeight} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddCalendar setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          {isAdd && <SavedData />}

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Calendar'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => setAdd(true)}
            />

            <SmallText
              text="2022-2023 Academic Calendar"
              textColor={COLORS.light.white}
            />

            {/* table */}
            <View style={[style.card, {padding: SIZES.small}]}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      DATE
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Fall Semester
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Action
                    </Text>
                  </View>
                  {calendar.map(item => (
                    <View style={style.tableBody} key={item.id}>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.date}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.title}
                      </Text>

                      <Text
                        style={[
                          style.tableItem,
                          {
                            color: COLORS.light.secondary,
                            width: itemWidth * 0.45,
                          },
                        ]}
                        onPress={() =>
                          navigation.navigate('EditCalendar', {item})
                        }>
                        Edit Calendar
                      </Text>
                    </View>
                  ))}

                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      DATE
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Spring Semester
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Action
                    </Text>
                  </View>
                  {calendar.map(item => (
                    <View style={style.tableBody} key={item.id}>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.date}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.title}
                      </Text>

                      <Text
                        style={[
                          style.tableItem,
                          {
                            color: COLORS.light.secondary,
                            width: itemWidth * 0.45,
                          },
                        ]}
                        onPress={() =>
                          navigation.navigate('EditCalendar', {item})
                        }>
                        Edit Calendar
                      </Text>
                    </View>
                  ))}

                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      DATE
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Summer Semester
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Action
                    </Text>
                  </View>

                  {calendar.map(item => (
                    <View style={style.tableBody} key={item.id}>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.date}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          style.tableItem,
                          {
                            color: COLORS.light.secondary,
                            width: itemWidth * 0.45,
                          },
                        ]}
                        onPress={() =>
                          navigation.navigate('EditCalendar', {item})
                        }>
                        Edit Calendar
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
