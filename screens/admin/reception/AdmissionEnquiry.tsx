import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, student} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../students/EditStudent';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';
import LogoBanner from '../../../components/LogoBanner';
import {NavigationProp} from '../../../constants/utils/navigationProp';
import AddEnquiry from './AddEnquiry';

const AdmissionEnquiry = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddEnquiry setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <View style={[style.rowSpace, {width: '100%'}]}>
              <Button
                btnText={'+ New Enquiry'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.45}
                onPress={() => setAdd(true)}
              />

              <Input
                placeholder={'Search enquirer...'}
                placeholderColor={COLORS.light.lightgray}
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
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Enquirer
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Enquiry Type
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Enquiry Source
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Date of Enquiry
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Contact Number
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      No of Student
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Status
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Remark
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.55}]}>
                      Action
                    </Text>
                  </View>

                  {student.map(item => (
                    <View style={style.tableBody} key={item.id}>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.code}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.level}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.sex}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.sex}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.sex}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.sex}
                      </Text>
                      <Text
                        style={[style.tableItem, {width: itemWidth * 0.55}]}>
                        {item.sex}
                      </Text>
                      <View
                        style={[
                          style.tableItem,
                          {
                            width: itemWidth * 0.55,
                            flexDirection: 'row',
                            gap: 40,
                          },
                        ]}>
                        <Icon
                          name="info"
                          size={16}
                          color="teal"
                          onPress={() =>
                            navigation.navigate('AdmissionEnquiryDetails')
                          }
                        />
                        <Icon
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() =>
                            navigation.navigate('EditAdmissionEnquiry')
                          }
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

export default AdmissionEnquiry;
