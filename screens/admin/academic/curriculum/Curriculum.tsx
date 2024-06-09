import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {departments} from '../../../../constants/dummy';
import {COLORS, SIZES} from '../../../../constants';
import {SavedData} from '../../students/EditStudent';
import {NavigationProp} from '../../../../constants/utils/navigationProp';
import Button from '../../../../components/widgets/Button';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import AddDepartment from './AddDepartment';

const Curriculum = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {add && <AddDepartment setAdd={setAdd} setIsAdd={setIsAdd} />}

      <ScrollView>
        <View style={style.container}>
          {isAdd && <SavedData />}

          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Button
              btnText={'+ New Department'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => setAdd(true)}
            />

            <View style={{}}>
              {departments.map(item => (
                <Button
                  btnText={item.department}
                  textColor={COLORS.light.white}
                  buttonColor={COLORS.light.transparent}
                  width={itemWidth * 0.9}
                  onPress={() => navigation.navigate('CurriculumLevel', {item})}
                  key={item.id}
                  alignItems={'flex-start'}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Curriculum;
