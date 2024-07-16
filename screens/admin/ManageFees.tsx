import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, feesList, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LogoBanner from '../../components/LogoBanner';
import {style} from '../../constants/style';
import Input from '../../components/widgets/Input';
import ScreenSizes from '../../constants/utils/ScreenSizes';

const ManageFees = () => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View style={[style.column, {gap: SIZES.small, marginTop: SIZES.xl}]}>
            <Input
              placeholder={'Search student...'}
              placeholderColor={COLORS.light.white}
              borderColor={COLORS.light.lightgray}
              width={itemWidth * 0.9}
              color={COLORS.light.white}
            />

            <View style={style.card}>
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Invoice</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Type</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Amount</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Academic year</Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>Action</Text>
                  </View>
                  {feesList.map(r => (
                    <View style={style.tableBody} key={r.id}>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>{r.invoice}</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>{r.type}</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>{r.amount}</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>{r.acY}</Text>
                      <Text style={[style.tableItem, {width: itemWidth * 0.45, color: COLORS.light.secondary}]}>Issue receipt</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageFees;
