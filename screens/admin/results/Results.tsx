import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, results, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import AddResult from './AddResult';
import {SavedData} from '../students/EditStudent';
import LogoBanner from '../../../components/LogoBanner';

const Results = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      {isAdd && <SavedData />}
      {add && <AddResult setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ Create New Record'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.45}
              onPress={() => setAdd(true)}
            />

            <View style={style.card}>
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.3}]}>
                      S/N
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.5}]}>
                      Semester/Session
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Students
                    </Text>
                  </View>
                  {results.map(r => (
                    <View style={style.tableBody} key={r.id}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.3}]}>
                        {r.id}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.5}]}>
                        {r.type}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.4}]}
                        onPress={() =>
                          navigation.navigate('ResultDetails', {item: r})
                        }>
                        {r.student}
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

export default Results;
