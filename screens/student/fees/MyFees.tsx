import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLORS, fees, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {style} from '../../../constants/style';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import SlideAnimation from '../../../components/SlideAnimation';
import StudentDrawer from '../../../components/StudentDrawer';
import TopComponent from '../../../components/TopComponent';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import LogoBanner from '../../../components/LogoBanner';
import MediumText from '../../../components/widgets/MediumText';
import Button from '../../../components/widgets/Button';
import MyFeesList from './MyFeesList';
import {NavigationProp} from '../../../constants/utils/navigationProp';

interface Item {
  id: number;
  invoice: string;
  type: string;
  amount: string;
  acY: string;
  status: string;
}

const MyFees = () => {
  const navigation = useNavigation<NavigationProp>();
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const {itemWidth, itemHeight} = ScreenSizes();

  const renderItem = ({item, index}: {item: Item; index: number}) => {
    return <MyFeesList item={item} index={index} />;
  };

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <View style={[style.container, {gap: SIZES.l}]}>
        <LogoBanner />

        <View style={style.card}>
          <MediumText text="My Fees" textColor={COLORS.light.black} />

          <View style={style.row}>
            <Button
              btnText={'PAYMENT INFO'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.primary}
              width={itemWidth * 0.4}
              onPress={() => {
                navigation.navigate('PaymentInfo');
              }}
            />

            <Button
              btnText={'MAKE PAYMENT'}
              textColor={COLORS.light.white}
              buttonColor={COLORS.light.secondary}
              width={itemWidth * 0.4}
              onPress={() => {}}
            />
          </View>

          {/* table */}
          <ScrollView
            horizontal
            style={{borderWidth: 1, marginTop: 20, borderColor: '#c8e1ff'}}>
            <FlatList
              data={fees}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              ListHeaderComponent={() => {
                return (
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Invoice No
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
                      Status
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
                      Action
                    </Text>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyFees;
