import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {SavedData} from '../../students/EditStudent';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {style} from '../../../../constants/style';
import LogoBanner from '../../../../components/LogoBanner';
import SmallText from '../../../../components/widgets/SmallText';
import InputPaper from '../../../../components/widgets/InputPaper';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';

const EditTimetable = ({route}: any) => {
  const {time} = route.params;

  const {itemWidth, itemHeight} = ScreenSizes();

  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <SmallText text={`Edit ${time} Timetable`} />

            <InputPaper
              label={'Monday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <InputPaper
              label={'Tuesday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <InputPaper
              label={'Wednesday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <InputPaper
              label={'Thursday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <InputPaper
              label={'Friday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <InputPaper
              label={'Saturday'}
              placeholderTextColor={COLORS.light.black}
              activeOutlineColor={COLORS.light.primary}
              backgroundColor={COLORS.light.white}
              onChangeText={() => {}}
            />

            <View style={style.row}>
              {isLoading ? (
                <View style={{width: itemWidth * 0.42}}>
                  <ActivityIndicator color={COLORS.light.secondary} />
                </View>
              ) : (
                <Button
                  btnText={'Save'}
                  textColor={COLORS.light.white}
                  buttonColor={'transparent'}
                  width={itemWidth * 0.42}
                  onPress={handleAdd}
                />
              )}
              <Button
                btnText={'Exit'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.42}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTimetable;
