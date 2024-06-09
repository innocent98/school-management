import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {faculties} from '../../../../constants/dummy';
import {COLORS, SIZES} from '../../../../constants';
import {SavedData} from '../../students/EditStudent';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {style} from '../../../../constants/style';
import AddFaculty from './AddFaculty';
import {NavigationProp} from '../../../../constants/utils/navigationProp';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';

const Faculties = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddFaculty setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}
          <LogoBanner />

          <View
            style={[
              style.column,
              {
                gap: SIZES.nano,
                marginTop: SIZES.xl,
              },
            ]}>
            <Button
              btnText={'+ Add New Faculty'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => setAdd(true)}
            />

            <View style={{marginTop: SIZES.xl}}>
              {faculties.map(item => (
                <Button
                  btnText={item.faculty}
                  textColor={COLORS.light.white}
                  buttonColor={COLORS.light.transparent}
                  width={itemWidth * 0.95}
                  onPress={() => navigation.navigate('FacultyCourses', {item})}
                  alignItems={'flex-start'}
                  key={item.id}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faculties;
