import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../students/EditStudent';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {style} from '../../../constants/style';
import SmallText from '../../../components/widgets/SmallText';
import Input from '../../../components/widgets/Input';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Button from '../../../components/widgets/Button';

const EditVisitorLog = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();

  const [date, setDate] = useState<Date>();
  const [entry, setEntry] = useState<Date>();
  const [exit, setExit] = useState<Date>();
  const [open, setOpen] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [openExit, setOpenExit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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

          <View style={[style.column, {gap: SIZES.font, marginTop: SIZES.xxl}]}>
            <SmallText text="Visitor Information" />

            <Input
              placeholder={'Visiting Purpose'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
            />

            <Input
              placeholder={'Contact Number'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'phone-pad'}
            />

            <Input
              placeholder={'Visitor Details'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
            />

            <Input
              placeholder={'Date of Visit'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
              onPressIn={() => setOpen(true)}
              value={date?.toLocaleDateString()}
            />

            <DatePicker
              modal
              mode="date"
              open={open}
              date={date || new Date()}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <Input
              placeholder={'Entry Time'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
              onPressIn={() => setOpenEntry(true)}
              value={entry?.toTimeString()}
            />

            <DatePicker
              modal
              mode="time"
              open={openEntry}
              date={entry || new Date()}
              onConfirm={entryTime => {
                setOpenEntry(false);
                setEntry(entryTime);
              }}
              onCancel={() => {
                setOpenEntry(false);
              }}
            />

            <Input
              placeholder={'Exit Time'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
              onPressIn={() => setOpenExit(true)}
              value={exit?.toTimeString()}
            />

            <DatePicker
              modal
              mode="time"
              open={openExit}
              date={exit || new Date()}
              onConfirm={exitTime => {
                setOpenExit(false);
                setExit(exitTime);
              }}
              onCancel={() => {
                setOpenExit(false);
              }}
            />

            <Input
              placeholder={'Whom to See/Meet'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
            />

            <Input
              placeholder={'Remark'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.transparent}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              keyboardType={'default'}
            />
          </View>

          <View
            style={[
              style.rowSpace,
              {width: itemWidth * 0.9, marginTop: SIZES.xl},
            ]}>
            {isLoading ? (
              <ActivityIndicator
                color={COLORS.light.secondary}
                style={{width: itemWidth * 0.4}}
              />
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

export default EditVisitorLog;
