import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, student} from '../../../constants';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {SavedData} from './EditStudent';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';
import Button from '../../../components/widgets/Button';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import AddStudent from './AddStudent';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';

const Students = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [selected, setSelected] = useState('');
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

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

      {add && <AddStudent setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ Add New Student'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.45}
              onPress={() => setAdd(true)}
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
                  width: itemWidth * 0.45,
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
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Matric No
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Level
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Gender
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Action
                    </Text>
                  </View>

                  {student.map((item, index) => (
                    <View style={style.tableBody} key={index}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {item.name}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {item.code}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        {item.level}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        {item.sex}
                      </Text>

                      <View style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        <Button
                          btnText={'View Profile'}
                          textColor={COLORS.light.secondary}
                          buttonColor={COLORS.light.transparent}
                          onPress={() =>
                            navigation.navigate('StudentProfile', {item})
                          }
                        />
                      </View>
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

export default Students;
