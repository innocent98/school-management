import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../../../constants';
import {SavedData} from '../../students/EditStudent';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import LogoBanner from '../../../../components/LogoBanner';
import SmallText from '../../../../components/widgets/SmallText';
import Input from '../../../../components/widgets/Input';
import Button from '../../../../components/widgets/Button';

const EditCalendar = ({route}: any) => {
  const {item} = route.params;

  const {itemWidth, itemHeight} = ScreenSizes();

  const navigation = useNavigation();

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

          <View style={[style.column, {marginTop: SIZES.xl}]}>
            <SmallText
              text="Calendar Information"
              textColor={COLORS.light.white}
            />

            <Input
              placeholder={'Date'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.white}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              defaultValue={item.date}
            />

            <Input
              placeholder={'Event'}
              placeholderColor={COLORS.light.gray}
              borderColor={COLORS.light.white}
              width={itemWidth * 0.9}
              color={COLORS.light.black}
              backgroundColor={COLORS.light.white}
              defaultValue={item.title}
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

export default EditCalendar;
