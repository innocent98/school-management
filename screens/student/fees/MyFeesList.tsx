import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import {NavigationProp} from '../../../constants/utils/navigationProp';

interface Item {
  item: {
    id: number;
    invoice: string;
    type: string;
    amount: string;
    acY: string;
    status: string;
  };
  index: number;
}

const MyFeesList: React.FC<Item> = ({item}) => {
  const {itemWidth, itemHeight} = ScreenSizes();
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={style.tableBody}>
      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
        {item.invoice}
      </Text>

      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
        {item.type}
      </Text>

      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
        {item.amount}
      </Text>

      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
        {item.acY}
      </Text>

      <Text style={[style.tableItem, {width: itemWidth * 0.4}]}>
        {item.status}
      </Text>

      <MaterialIcons
        name="info"
        size={24}
        style={[style.tableItem, {width: itemWidth * 0.4}]}
        onPress={() => navigation.navigate('FeesDetails', {item})}
      />
    </View>
  );
};

export default MyFeesList;
