import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, student} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../students/EditStudent';
import {style} from '../../../constants/style';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';
import AddVisitor from './AddVisitor';
import {NavigationProp} from '../../../constants/utils/navigationProp';

const VisitorLog = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddVisitor setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <View style={[style.rowSpace, {width: '100%'}]}>
              <Button
                btnText={'+ New Visitor Log'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.45}
                onPress={() => setAdd(true)}
              />

              <Input
                placeholder={'Search visitor...'}
                placeholderColor={COLORS.light.white}
                borderColor={COLORS.light.lightgray}
                width={itemWidth * 0.45}
                color={COLORS.light.white}
              />
            </View>

            {/* table */}
            <View style={style.card}>
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Visiting Purpose
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Visitor Details
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Date of Visit
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Entry Time
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Exit Time
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Whom to See/Meet
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                      Remark
                    </Text>
                    <Text style={style.tableItem}>Action</Text>
                  </View>

                  {student.map(r => (
                    <View style={style.tableBody} key={r.id}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.name}
                      </Text>
                      <Text
                        style={[
                          style.tableItem,
                          {width: itemWidth * 0.6, textAlign: 'left'},
                        ]}>
                        Name: Adebayo Emmanuel, Student Name: Adebayo Victor,
                        Relation with Student: Father, Contact Number: 123456789
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.level}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.sex}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.sex}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.sex}
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
                        {r.sex}
                      </Text>
                      <View
                        style={[
                          style.tableItem,
                          {flexDirection: 'row', gap: 20},
                        ]}>
                        <Icon
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() => navigation.navigate('EditVisitorLog')}
                        />
                        <Icon name="delete" size={16} color="red" />
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

export default VisitorLog;
