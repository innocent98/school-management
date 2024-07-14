import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../../constants/styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {days} from '../../../../constants/dummy';
import {SavedData} from '../../students/EditStudent';
import {style} from '../../../../constants/style';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../../constants';
import {NavigationProp} from '../../../../constants/utils/navigationProp';
import LogoBanner from '../../../../components/LogoBanner';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';

const Timetable = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <View style={style.container}>
        {isAdd && <SavedData />}

        <LogoBanner />

        <View style={[style.column, {gap: SIZES.medium, marginTop: SIZES.xl}]}>
          <Button
            btnText={'TimetableOption'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.4}
            onPress={() => navigation.navigate('TimetableOption')}
          />

          {/* table */}
          <View style={[style.card, {padding: SIZES.small}]}>
            <ScrollView horizontal={true}>
              <View style={style.table}>
                <View style={style.tableHead}>
                  <Text style={style.tableItem}>Days/Time</Text>
                  <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                    8:00 - 10:00
                  </Text>
                  <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                    10:00 - 12:00
                  </Text>
                  <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                    12:00 - 14:00
                  </Text>
                  <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                    14:00 - 16:00
                  </Text>
                  <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                    16:00 - 18:00
                  </Text>
                  <Text style={style.tableItem}>Action</Text>
                </View>

                {days.map(day => (
                  <View style={style.tableBody} key={day.id}>
                    <Text style={[style.tableItem, {}]}>{day.day}</Text>
                    <Text
                      style={[
                        style.tableItem,
                        {width: itemWidth * 0.45},
                      ]}></Text>
                    <Text
                      style={[
                        style.tableItem,
                        {width: itemWidth * 0.45},
                      ]}></Text>
                    <Text
                      style={[
                        style.tableItem,
                        {width: itemWidth * 0.45},
                      ]}></Text>
                    <Text
                      style={[
                        style.tableItem,
                        {width: itemWidth * 0.45},
                      ]}></Text>
                    <Text
                      style={[
                        style.tableItem,
                        {width: itemWidth * 0.45},
                      ]}></Text>
                    <View style={[style.tableItem, {}]}>
                      <Icon
                        name="edit"
                        size={16}
                        color={COLORS.light.edit}
                        onPress={() => navigation.navigate('TimetableOption')}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Timetable;
