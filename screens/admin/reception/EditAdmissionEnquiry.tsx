import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS, SIZES} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SelectList} from 'react-native-dropdown-select-list';
import {genderData, religionData} from '../../../constants/dummy';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../students/EditStudent';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {style} from '../../../constants/style';
import SmallText from '../../../components/widgets/SmallText';
import Input from '../../../components/widgets/Input';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import LogoBanner from '../../../components/LogoBanner';
import Button from '../../../components/widgets/Button';

const EditAdmissionEnquiry = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsEdit(true);
      setIsLoading(false);
      timeout = setTimeout(() => {
        setIsEdit(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />
      {isEdit && <SavedData />}

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.card, {marginTop: SIZES.xl}]}>
            <View style={style.column}>
              <SmallText
                text="Enquiry Information"
                textColor={COLORS.light.secondary}
                textAlign={'left'}
              />

              <Input
                placeholder={'Name'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
              />

              <Input
                placeholder={'Contact Number'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
                keyboardType="phone-pad"
              />

              <Input
                placeholder={'Email'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
                keyboardType="email-address"
              />

              <Input
                placeholder={'Date of Enquiry'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
                keyboardType="phone-pad"
                onPressIn={() => setOpen(true)}
                value={date.toLocaleDateString()}
              />

              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />

              <SelectList
                setSelected={(value: string) => setReligion(value)}
                data={religionData}
                save="value"
                placeholder="Select Faculty"
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
                  borderColor: COLORS.light.lightgray,
                }}
                dropdownStyles={style.dropdown}
                search={false}
              />

              <Input
                placeholder={'Enquiry Details'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
                keyboardType="email-address"
              />

              <SelectList
                setSelected={(value: string) => setGender(value)}
                data={genderData}
                save="value"
                placeholder="Select Faculty"
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
                  borderColor: COLORS.light.lightgray,
                }}
                dropdownStyles={style.dropdown}
                search={false}
              />

              <Input
                placeholder={'Remark'}
                placeholderColor={COLORS.light.gray}
                borderColor={COLORS.light.gray}
                width={itemWidth * 0.9}
                color={COLORS.light.black}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={[style.row, {marginTop: SIZES.l}]}>
            {isLoading ? (
              <RectButton style={styles.indicator}>
                <ActivityIndicator color={COLORS.light.secondary} />
              </RectButton>
            ) : (
              <Button
                btnText={'Save'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.transparent}
                width={itemWidth * 0.4}
                onPress={handleAdd}
              />
            )}
            <Button
              btnText={'Exit'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAdmissionEnquiry;
