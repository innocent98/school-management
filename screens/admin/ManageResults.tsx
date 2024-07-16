import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, results, SIZES} from '../../constants';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import {style} from '../../constants/style';
import SmallText from '../../components/widgets/SmallText';
import {NavigationProp} from '../../constants/utils/navigationProp';

const ManageResults = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <LogoBanner />

            <SmallText text="tap to see/edit student's record" />

            <View
              style={[
                style.column,
                {
                  gap: SIZES.extraLarge,
                  marginTop: SIZES.xl,
                  alignItems: 'flex-start',
                  width: '100%',
                },
              ]}>
              {results.map(result => (
                <SmallText
                  text={result.type}
                  key={result.id}
                  onPress={() =>
                    navigation.navigate('StudentResult', {item: result})
                  }
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageResults;
