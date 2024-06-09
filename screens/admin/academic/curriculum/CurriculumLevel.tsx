import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {level} from '../../../../constants/dummy';
import Button from '../../../../components/widgets/Button';
import FocusedStatusBar from '../../../../components/FocusedStatusBar';
import LogoBanner from '../../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../../constants';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import {NavigationProp} from '../../../../constants/utils/navigationProp';

const CurriculumLevel = ({route}: any) => {
  const {item} = route.params;

  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={{marginTop: SIZES.xl}}>
            {level.map(lev => (
              <Button
                btnText={`${item.department} ${lev.level}`}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.transparent}
                width={itemWidth * 0.9}
                onPress={() =>
                  navigation.navigate('CurriculumDetails', {item, lev})
                }
                key={lev.id}
                alignItems={'flex-start'}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurriculumLevel;
