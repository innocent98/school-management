import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../../students/EditStudent';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {style} from '../../../../constants/style';
import LogoBanner from '../../../../components/LogoBanner';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import Input from '../../../../components/widgets/Input';
import SmallText from '../../../../components/widgets/SmallText';
import Button from '../../../../components/widgets/Button';

const EditAssignment = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();

  const [assigned, setAssigned] = useState(new Date());
  const [submission, setSubmission] = useState(new Date());
  const [openAssigned, setOpenAssigned] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);
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

          <View style={[style.card, {gap: SIZES.medium, marginTop: SIZES.xl}]}>
            <SmallText
              text="Edit Assignment"
              textColor={COLORS.light.secondary}
            />

            <Input
              placeholder={'Course Code'}
              placeholderColor={COLORS.light.black}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
            />

            <Input
              placeholder={'Assignment'}
              placeholderColor={COLORS.light.black}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              multiline
            />

            <SmallText
              text="Assigned Date"
              textColor={COLORS.light.secondary}
            />

            <Input
              placeholder={'Assigned Date'}
              placeholderColor={COLORS.light.black}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              onPressIn={() => setOpenAssigned(true)}
              value={assigned.toLocaleDateString()}
            />

            <DatePicker
              modal
              mode="date"
              open={openAssigned}
              date={assigned}
              onConfirm={assigned => {
                setOpenAssigned(false);
                setAssigned(assigned);
              }}
              onCancel={() => {
                setOpenAssigned(false);
              }}
            />

            <SmallText
              text="Submission Date"
              textColor={COLORS.light.secondary}
            />

            <Input
              placeholder={'Submission Date'}
              placeholderColor={COLORS.light.black}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              onPressIn={() => setOpenSubmission(true)}
              value={submission.toLocaleDateString()}
            />

            <DatePicker
              modal
              mode="date"
              open={openSubmission}
              date={submission}
              onConfirm={submission => {
                setOpenSubmission(false);
                setSubmission(submission);
              }}
              onCancel={() => {
                setOpenSubmission(false);
              }}
            />

            <Input
              placeholder={'Lecturer'}
              placeholderColor={COLORS.light.black}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
            />

            <View style={style.row}>
              {isLoading ? (
                <View style={{width: itemWidth * 0.4}}>
                  <ActivityIndicator size="small" color={COLORS.secondary} />
                </View>
              ) : (
                <Button
                  btnText={'Save'}
                  textColor={COLORS.light.primary}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAssignment;
