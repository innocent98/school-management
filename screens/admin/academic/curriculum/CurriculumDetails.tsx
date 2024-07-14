import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {SavedData} from '../../students/EditStudent';
import {courseList} from '../../../../constants/dummy';
import AddCourse from './AddCourse';
import Button from '../../../../components/widgets/Button';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import SmallText from '../../../../components/widgets/SmallText';
import { NavigationProp } from '../../../../constants/utils/navigationProp';

const CurriculumDetails = ({route}: any) => {
  const {itemWidth} = ScreenSizes();

  const {item, lev} = route.params;
  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddCourse setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Course'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.35}
              onPress={() => setAdd(true)}
            />

            {/* table */}
            <View style={style.card}>
              <ScrollView horizontal>
                <View style={style.table}>
                  <SmallText
                    text={`${item.department} ${lev.level}`}
                    textColor={COLORS.light.secondary}
                    textAlign={'left'}
                  />

                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>COURSE CODE</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>COURSE TITLE</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>COURSE UNIT</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>LECT-IN-CHARGE</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Action</Text>
                  </View>

                  {courseList.map(item => (
                    <View style={style.tableBody} key={item.id}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>{item.code}</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Nil</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>3</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Mr Jonathan</Text>

                      <View style={[style.tableItem, {width: itemWidth * 0.45}]}>
                        <SmallText
                          text="Edit Cource"
                          textColor={COLORS.light.secondary}
                          onPress={() =>
                            navigation.navigate('EditCourses', {item})
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

export default CurriculumDetails;
