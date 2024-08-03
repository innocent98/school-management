import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import {COLORS, SIZES} from '../../constants';
import {style} from '../../constants/style';
import MediumText from '../../components/widgets/MediumText';
import BigText from '../../components/widgets/BigText';
import SchoolSelectionItem from './SchoolSelectionItem';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import Button from '../../components/widgets/Button';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../constants/utils/navigationProp';

const SchoolSelection = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.white}]}>
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={'dark-content'}
      />

      <View style={[style.container, {flex: 1}]}>
        <MediumText text="Select School" textColor={COLORS.light.black} />

        <ScrollView>
          <View
            style={[
              style.column,
              {
                gap: SIZES.l,
                alignItems: 'flex-start',
                marginTop: SIZES.xl,
                paddingBottom: itemWidth * 0.08,
                height: 'auto',
              },
            ]}>
            <BigText text="Popular Schools" textColor={COLORS.light.black} />

            <View style={style.column}>
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
              <SchoolSelectionItem />
            </View>
          </View>
        </ScrollView>

        <Button
          btnText={"Can't find your school?"}
          textColor={COLORS.light.white}
          buttonColor={COLORS.light.customButton}
          width={itemWidth * 0.9}
          onPress={() => navigation.navigate('FindSchool')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SchoolSelection;
