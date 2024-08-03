import {View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, SIZES} from '../constants';
import {style} from '../constants/style';
import ScreenSizes from '../constants/utils/ScreenSizes';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../constants/utils/navigationProp';

interface Props {
  slideIn: () => void;
}

const TopComponent: React.FC<Props> = ({slideIn}) => {
  const {itemWidth} = ScreenSizes();

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[style.rowSpace, {padding: itemWidth * 0.03}]}>
      <MaterialIcons
        name="menu"
        size={SIZES.xl}
        color={COLORS.light.white}
        onPress={slideIn}
      />

      <View style={style.row}>
        <View>
          <Fontisto
            name="messenger"
            size={SIZES.extraLarge}
            color={COLORS.light.white}
            onPress={() => navigation.navigate('Chat')}
          />
          <View style={style.badge}></View>
        </View>

        <View>
          <MaterialIcons
            name="notifications"
            size={SIZES.l}
            color={COLORS.light.white}
            onPress={() => navigation.navigate('Notification')}
          />
          <View style={style.badge}></View>
        </View>
      </View>
    </View>
  );
};

export default TopComponent;
