import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, feesList, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';
import {NavigationProp} from '../../../constants/utils/navigationProp';

const Fees = () => {
  const {itemWidth} = ScreenSizes();

  const {slideAnim, slideIn, slideOut} = SlideAnimation();

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <View
              style={[
                style.rowSpace,
                {width: '100%', marginBottom: SIZES.font},
              ]}>
              <Button
                btnText={'+ Add New Fee'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.45}
                onPress={() => {}}
              />

              <Input
                placeholder={'Search fee...'}
                placeholderColor={COLORS.light.white}
                borderColor={COLORS.light.lightgray}
                width={itemWidth * 0.45}
                color={COLORS.light.white}
              />
            </View>

            <View style={style.card}>
              <ScrollView>
                <ScrollView horizontal={true}>
                  <View style={style.table}>
                    <View style={style.tableHead}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        Invoice
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        Type
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        Amount
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        Academic year
                      </Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                        Category
                      </Text>
                    </View>
                    {feesList.map(r => (
                      <View style={style.tableBody} key={r.id}>
                        <Text
                          style={[style.tableItem, {width: itemWidth * 0.4}]}>
                          {r.invoice}
                        </Text>
                        <Text
                          style={[style.tableItem, {width: itemWidth * 0.4}]}>
                          {r.type}
                        </Text>
                        <Text
                          style={[style.tableItem, {width: itemWidth * 0.4}]}>
                          {r.amount}
                        </Text>
                        <Text
                          style={[style.tableItem, {width: itemWidth * 0.4}]}>
                          {r.acY}
                        </Text>
                        <RectButton
                          onPress={() =>
                            navigation.navigate('FeesStatus', {item: r})
                          }>
                          <Text
                            style={[
                              style.tableItem,
                              {
                                width: itemWidth * 0.4,
                                color: COLORS.light.secondary,
                              },
                            ]}>
                            {r.cat}
                          </Text>
                        </RectButton>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Fees;
