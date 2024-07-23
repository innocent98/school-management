import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../../../constants';
import {SavedData} from '../students/EditStudent';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {style} from '../../../constants/style';
import AddExam from './AddExam';

const ExamEditor = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddExam setAdd={setAdd} setIsAdd={setIsAdd} />}
      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Exam Question'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.48}
              onPress={() => setAdd(true)}
            />

            <View style={style.card}>
              <ScrollView horizontal>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Question No
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.8}]}>
                      Question
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Option A
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Option B
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Option C
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Option D
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Correct Option
                    </Text>
                    <Text style={style.tableItem}>Action</Text>
                  </View>

                  <View style={style.tableBody}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      1
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.8}]}>
                      In the movie Fame, a young man is famed as a performer in
                      a Broadway play. He is on the cusp of stardom, but he
                      doesn't seem to have a clue how to get there. He struggles
                      to understand what it means to be a star. In the end, he
                      realizes that he has talent and ambition- but he must use
                      both gifts effectively to reach his goal.
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      I don't know
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Yes
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      No
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Maybe
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      B
                    </Text>
                    <View style={style.tableItem}>
                      <Icon name="delete" size={16} color="red" />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamEditor;
