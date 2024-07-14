import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../constants';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Table, Row, Rows} from 'react-native-table-component';
import {style} from '../../constants/style';
import LogoBanner from '../../components/LogoBanner';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import SmallText from '../../components/widgets/SmallText';
import MediumText from '../../components/widgets/MediumText';
import {FONTS} from '../../constants/theme';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import StudentDrawer from '../../components/StudentDrawer';
import TopComponent from '../../components/TopComponent';
import SlideAnimation from '../../components/SlideAnimation';

const data = [
  {
    key: '1',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
  },
  {
    key: '2',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL SECOND SEMESTER)',
  },
  {
    key: '3',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 300LEVEL FIRST SEMESTER)',
  },
  {
    key: '4',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 300LEVEL SECOND SEMESTER)',
  },
  {
    key: '5',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 200LEVEL FIRST SEMESTER)',
  },
  {
    key: '6',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 200LEVEL SECOND SEMESTER)',
  },
  {
    key: '7',
    value:
      'Summer 2021/2022 SESSION (COMPUTER SCIENCE 100LEVEL FIRST SEMESTER)',
  },
];

const MyResults = () => {
  const {itemWidth, itemHeight} = ScreenSizes();
  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  const [selected, setSelected] = useState(data[0].value);

  const tableHead = ['Subject', 'Maximum Marks', 'Marks Obtained'];
  const tableData = [
    ['SOFTWARE DEVELOPMENT', '100', '95'],
    ['RESEARCH PROJECT', '100', '95'],
    ['SYSTEM ADMINISTRATION & COMPUTER', '100', '95'],
    ['COMPUTER GRAPHICS', '100', '95'],
    ['COMPUTER HARDWARE', '100', '95'],
    ['Total', '100', '650'],
    ['', 'Percentage', '98%'],
  ];

  // console.log(selected)

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView>
        <View style={[style.container, {gap: SIZES.l}]}>
          <LogoBanner />

          <View style={[style.card]}>
            <View
              style={[
                style.column,
                {
                  alignItems: 'flex-start',
                  width: itemWidth * 0.9,
                  gap: SIZES.large,
                },
              ]}>
              <View style={{alignSelf: 'center'}}>
                <MediumText text="Score Board" textColor={COLORS.light.black} />
              </View>

              <SelectList
                setSelected={(value: any) => setSelected(value)}
                data={data}
                save="value"
                inputStyles={{color: COLORS.light.black, width: '94%'}}
                dropdownTextStyles={{color: COLORS.light.black}}
                fontFamily={FONTS.regular}
              />

              <View style={style.row}>
                <SmallText text="Exam Result" textColor={COLORS.light.black} />
                <Icon
                  name="file-download"
                  size={20}
                  color={COLORS.light.black}
                />
              </View>

              {/* address */}
              <View>
                <MediumText
                  text="IAEC UNIVERSITY TOGO"
                  textColor={COLORS.light.black}
                  textAlign={'left'}
                />
                <SmallText
                  text="Bd de la Kara, Behind Senegal Embassy, Tokoin-Doumassesse
                      11, P.O. Box 8619 Lomé-Togo"
                  textColor={COLORS.light.black}
                  textAlign={'left'}
                />

                <SmallText
                  text="Phone - +22897655211, +22897738728 | Email -
                      info@iaec-university.tg"
                  textColor={COLORS.light.black}
                  textAlign={'left'}
                />
              </View>

              {/* result details */}
              <View
                style={[
                  style.outlineCard,
                  {
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  },
                ]}>
                <SmallText text="Exam:" textColor={COLORS.light.gray} />

                <View style={{width: '90%'}}>
                  <SmallText
                    text={selected}
                    textColor={COLORS.light.black}
                    textAlign={'left'}
                    fontFamily={FONTS.semi_bold}
                  />
                </View>
              </View>

              {/* student details */}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  gap: SIZES.base,
                }}>
                <MediumText
                  text="Student Details:"
                  textColor={COLORS.light.black}
                />

                <View style={[style.outlineCard, {alignItems: 'flex-start'}]}>
                  <View style={style.row}>
                    <SmallText
                      text="Enrollment ID:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText
                      text="IAEC/ADM/19/10589"
                      fontFamily={FONTS.semi_bold}
                      textColor={COLORS.light.black}
                    />
                  </View>

                  <View style={style.row}>
                    <SmallText text="Name:" textColor={COLORS.light.black} />
                    <SmallText
                      text="ADEBAYO VICTOR OLUWATOSIN"
                      fontFamily={FONTS.semi_bold}
                      textColor={COLORS.light.black}
                    />
                  </View>
                </View>
              </View>

              {/* result table */}
              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  gap: SIZES.base,
                }}>
                <MediumText text="Exam Marks:" textColor={COLORS.light.black} />

                <View style={style.outlineCard}>
                  <ScrollView horizontal={true}>
                    <Table
                      borderStyle={{
                        borderWidth: 2,
                        borderColor: COLORS.light.tableBorder,
                      }}
                      style={{}}>
                      <Row
                        data={tableHead}
                        style={{
                          height: itemHeight * 0.06,
                          backgroundColor: COLORS.light.tableHead,
                        }}
                        textStyle={{
                          color: COLORS.light.black,
                          textAlign: 'center',
                          width: itemWidth * 0.45,
                        }}
                      />

                      <Rows
                        data={tableData}
                        textStyle={{
                          color: COLORS.light.black,
                          textAlign: 'center',
                          width: itemWidth * 0.45,
                        }}
                        style={{height: itemHeight * 0.09}}
                      />
                    </Table>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyResults;
