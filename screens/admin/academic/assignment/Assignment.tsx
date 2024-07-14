import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../../constants/styles';
import {COLORS, SIZES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../../students/EditStudent';
import AddAssignment from './AddAssignment';
import Button from '../../../../components/widgets/Button';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import LogoBanner from '../../../../components/LogoBanner';
import { NavigationProp } from '../../../../constants/utils/navigationProp';

const Assignment = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddAssignment setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View
            style={[style.column, {gap: SIZES.medium, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Assignment'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => setAdd(true)}
            />

            {/* table */}
            <View style={[style.card, {padding: SIZES.small}]}>
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.35}]}>Course Code</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.65}]}>Assignment</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>Assigned Date</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>Submission Date</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>Lecturer</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.3}]}>Action</Text>
                  </View>
                  <View style={styles.tableBody}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.35}]}>CET 322</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.65}]}>
                      In the movie Fame, a young man is famed as a performer in
                      a Broadway play. He is on the cusp of stardom, but he
                      doesn't seem to have a clue how to get there. He struggles
                      to understand what it means to be a star. In the end, he
                      realizes that he has talent and ambition- but he must use
                      both gifts effectively to reach his goal.
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>10-01-2023</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>15-01-2023</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>Mr Jonathan</Text>
                    <View style={[style.tableItem, {width: itemWidth * 0.3, gap: 20}]}>
                      <Icon
                        style={styles.enquiryIconBtn}
                        name="edit"
                        size={24}
                        color="#009EFB"
                        onPress={() => navigation.navigate('EditAssignment')}
                      />
                      <Icon
                        style={styles.enquiryIconBtn}
                        name="delete"
                        size={24}
                        color="red"
                      />
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

export default Assignment;
