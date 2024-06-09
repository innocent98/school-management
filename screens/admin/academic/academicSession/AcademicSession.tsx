import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SavedData} from '../../students/EditStudent';
import AddSession from './AddSession';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../../../constants';
import {style} from '../../../../constants/style';
import LogoBanner from '../../../../components/LogoBanner';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import SmallText from '../../../../components/widgets/SmallText';

const AcademicSession = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddSession setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Session/Semester'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.5}
              onPress={() => setAdd(true)}
            />

            <View style={{alignSelf: 'flex-start', marginTop: SIZES.xl}}>
              <SmallText
                text="2022/2023 Session Fall Semester"
                textColor={COLORS.light.white}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcademicSession;
