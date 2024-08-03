import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../../admin/students/EditStudent';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Button from '../../../components/widgets/Button';
import MediumText from '../../../components/widgets/MediumText';
import {FONTS, SIZES} from '../../../constants/theme';
import SmallText from '../../../components/widgets/SmallText';
import AddLibrary from './AddLibrary';

const ELibrary = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  const [selected, setSelected] = useState([]);
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      {add && <AddLibrary setAdd={setAdd} setIsAdd={setIsAdd} />}

      {isAdd && <SavedData />}

      <ScrollView>
        <View style={[style.container, {gap: SIZES.l, alignItems: 'center'}]}>
          <LogoBanner />

          <Button
            btnText={'+ New Library'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.3}
            onPress={() => {
              setAdd(true);
            }}
          />

          <View style={style.card}>
            <MediumText text="Library Assets" textColor={COLORS.light.black} />

            <SelectList
              setSelected={(value: any) => setSelected(value)}
              data={data}
              save="value"
              placeholder="Select Option"
              inputStyles={{
                width: itemWidth * 0.9,
                borderRadius: 20,
                color: COLORS.light.black,
              }}
              dropdownTextStyles={{
                width: itemWidth * 0.9,
                borderRadius: 20,
                color: COLORS.light.black,
              }}
              boxStyles={{
                width: itemWidth * 0.9,
                borderColor: COLORS.light.soft,
              }}
              dropdownStyles={style.dropdown}
              search={false}
            />
            {/* asset cards */}
            <View style={[style.row, {flexWrap: 'wrap'}]}>
              <View
                style={[
                  style.card,
                  {
                    width: '46%',
                    backgroundColor: COLORS.light.primary,
                    padding: SIZES.base,
                  },
                ]}>
                <SmallText text="ETHICAL HACKING" />
                <SmallText text="Author: Shittu Abiola" />

                <View style={style.row}>
                  <SmallText text=" 09/11/2022" />
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </View>
              </View>

              <View
                style={[
                  style.card,
                  {
                    width: '46%',
                    backgroundColor: COLORS.light.primary,
                    padding: SIZES.base,
                  },
                ]}>
                <SmallText text="ETHICAL HACKING" />
                <SmallText text="Author: Shittu Abiola" />

                <View style={style.row}>
                  <SmallText text=" 09/11/2022" />
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </View>
              </View>

              <View
                style={[
                  style.card,
                  {
                    width: '46%',
                    backgroundColor: COLORS.light.primary,
                    padding: SIZES.base,
                  },
                ]}>
                <SmallText text="ETHICAL HACKING" />
                <SmallText text="Author: Shittu Abiola" />

                <View style={style.row}>
                  <SmallText text=" 09/11/2022" />
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </View>
              </View>

              <View
                style={[
                  style.card,
                  {
                    width: '46%',
                    backgroundColor: COLORS.light.primary,
                    padding: SIZES.base,
                  },
                ]}>
                <SmallText text="ETHICAL HACKING" />
                <SmallText text="Author: Shittu Abiola" />

                <View style={style.row}>
                  <SmallText text=" 09/11/2022" />
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ELibrary;
