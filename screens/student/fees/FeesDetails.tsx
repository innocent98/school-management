import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, list, SHADOWS, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Logo} from '../Home';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import MediumText from '../../../components/widgets/MediumText';
import SmallText from '../../../components/widgets/SmallText';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';

export const DetailLists = ({data}: any) => {
  const navigation = useNavigation();

  return (
    <View style={style.tableBody}>
      <Icon
        name="print"
        size={SIZES.l}
        color={COLORS.light.secondary}
        style={[
          style.tableItem,
          {color: COLORS.light.secondary, fontSize: SIZES.l},
        ]}
      />

      <Text style={style.tableItem}>{data.amount}</Text>
    </View>
  );
};

const FeesDetails = ({route}: any) => {
  const {itemWidth} = ScreenSizes();
  const {item} = route.params;

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar />

      <View style={[style.container, {gap: SIZES.l}]}>
        <LogoBanner />

        <View style={style.card}>
          <FlatList
            data={list}
            renderItem={({item}) => <DetailLists data={item} />}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={true}
            ListHeaderComponent={() => {
              return (
                <View style={style.tableHead}>
                  <Text style={style.tableItem}>#</Text>
                  <Text style={style.tableItem}>Amount</Text>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return (
                <View
                  style={[
                    style.outlineCard,
                    {borderRadius: 0, padding: 0, marginTop: SIZES.large},
                  ]}>
                  <View
                    style={[
                      style.row,
                      {
                        borderBottomWidth: 1,
                        borderBlockColor: COLORS.light.lightgray,
                        padding: SIZES.medium,
                      },
                    ]}>
                    <MediumText
                      text="Fee type:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText
                      text={item.type}
                      textColor={COLORS.light.black}
                    />
                  </View>

                  <View
                    style={[
                      style.row,
                      {
                        borderBottomWidth: 1,
                        borderBlockColor: COLORS.light.lightgray,
                        padding: SIZES.medium,
                      },
                    ]}>
                    <MediumText
                      text="Fee amount:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText
                      text={item.amount}
                      textColor={COLORS.light.black}
                    />
                  </View>

                  <View
                    style={[
                      style.row,
                      {
                        borderBottomWidth: 1,
                        borderBlockColor: COLORS.light.lightgray,
                        padding: SIZES.medium,
                      },
                    ]}>
                    <MediumText
                      text="Balance to pay:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText
                      text={item.amount}
                      textColor={COLORS.light.black}
                    />
                  </View>

                  <View
                    style={[
                      style.row,
                      {
                        borderBottomWidth: 1,
                        borderBlockColor: COLORS.light.lightgray,
                        padding: SIZES.medium,
                      },
                    ]}>
                    <MediumText
                      text="Academic year:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText text={item.acY} textColor={COLORS.light.black} />
                  </View>

                  <View
                    style={[
                      style.row,
                      {
                        borderBottomWidth: 1,
                        borderBlockColor: COLORS.light.lightgray,
                        padding: SIZES.medium,
                      },
                    ]}>
                    <MediumText
                      text="Student matric No:"
                      textColor={COLORS.light.black}
                    />
                    <SmallText
                      text={'0058CSC2122'}
                      textColor={COLORS.light.black}
                    />
                  </View>

                  <View style={[style.row, {padding: SIZES.medium}]}>
                    <MediumText
                      text="Payment status:"
                      textColor={COLORS.light.black}
                    />
                    <Button
                      btnText={item.status}
                      textColor={COLORS.light.white}
                      buttonColor={
                        item.status === 'CLEARED'
                          ? COLORS.light.primary
                          : COLORS.light.secondary
                      }
                      width={itemWidth * 0.3}
                      onPress={() => {}}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    paddingBottom: 30,
  },
  detailsContainer: {
    backgroundColor: COLORS.background,
    width: '90%',
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark,
    // maxHeight: '80%',
  },
  tableHead: {
    flexDirection: 'row',
    backgroundColor: '#f1f8ff',
  },
  tableBody: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  hd: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
    padding: 20,
    borderWidth: 1,
    borderColor: '#c8e1ff',
    width: 150,
  },
  footerContainer: {marginTop: 20},
  detailText: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 18,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 15,
  },
  subDetails: {fontFamily: 'RobotoSlab-Regular', fontSize: 14},
  cleared: {
    fontFamily: 'RobotoSlab-Regular',
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    fontSize: 14,
  },
  notCleared: {
    fontFamily: 'RobotoSlab-Regular',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    fontSize: 14,
  },
});

export default FeesDetails;
