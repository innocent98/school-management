import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../constants/styles';
import {COLORS, SIZES, student} from '../../constants';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import SlideAnimation from '../../components/SlideAnimation';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import {style} from '../../constants/style';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import Input from '../../components/widgets/Input';
import SmallText from '../../components/widgets/SmallText';

const Hostel = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  const {itemWidth} = ScreenSizes();
  const navigation =
    useNavigation<
      import('../../constants/utils/navigationProp').NavigationProp
    >();

  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: '100l first'},
    {key: '2', value: '100l second'},
    {key: '3', value: '200l first'},
    {key: '4', value: '200l second'},
    {key: '5', value: '300l first'},
    {key: '6', value: '300l second'},
  ];
  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <SmallText
              text={`Total no of Students in the Hostel: ${
                student.filter(s => s.isHostel).length
              }`}
            />

            <View
              style={[
                style.rowSpace,
                {width: '100%', marginBottom: SIZES.font},
              ]}>
              <Input
                placeholder={'Search student...'}
                placeholderColor={COLORS.light.white}
                borderColor={COLORS.light.lightgray}
                width={itemWidth * 0.45}
                color={COLORS.light.white}
              />

              <SelectList
                setSelected={(value: any) => setSelected(value)}
                data={data}
                save="value"
                placeholder="Filter"
                inputStyles={{
                  width: itemWidth * 0.45,
                  borderRadius: 20,
                  color: COLORS.light.white,
                }}
                dropdownTextStyles={{
                  width: itemWidth * 0.3,
                  borderRadius: 20,
                  color: COLORS.light.white,
                }}
                boxStyles={{
                  width: itemWidth * 0.45,
                  borderColor: COLORS.light.lightgray,
                }}
                dropdownStyles={style.dropdown}
                search={false}
              />
            </View>

            {/* table */}
            <View style={style.card}>
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Student Name
                    </Text>
                    <Text style={style.tableItem}>Matric No</Text>
                    <Text style={style.tableItem}>Level</Text>
                    <Text style={style.tableItem}>Gender</Text>
                    <Text style={style.tableItem}>Room No</Text>
                    <Text style={style.tableItem}>Action</Text>
                  </View>
                  {student.map((r, index) => (
                    <View style={style.tableBody} key={index}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.name}
                      </Text>
                      <Text style={style.tableItem}>{r.code}</Text>
                      <Text style={style.tableItem}>{r.level}</Text>
                      <Text style={style.tableItem}>{r.sex}</Text>
                      <Text style={style.tableItem}>
                        {r.isHostel ? 'Room002' : '-'}
                      </Text>
                      <Text
                        style={[
                          style.tableItem,
                          {
                            color: r.isHostel
                              ? COLORS.light.secondary
                              : COLORS.light.primary,
                          },
                        ]}>
                        {r.isHostel ? 'Remove from hostel' : 'Add to hostel'}
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

export default Hostel;
