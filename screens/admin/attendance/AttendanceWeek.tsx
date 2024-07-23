import {View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {style} from '../../../constants/style';
import {COLORS, SIZES} from '../../../constants';

type Props = {
  isPresent: boolean;
};

const AttendanceWeek = (props: Props) => {
  const handleIsPresent = () => {};
  const handleIsAbsent = () => {};

  return (
    <View style={[style.tableItem, {flexDirection: 'row', gap: SIZES.large}]}>
      <MaterialIcons
        style={[
          style.outlineCard,
          {height: 'auto', width: 'auto', padding: SIZES.nano},
        ]}
        name="done"
        size={16}
        color={props.isPresent ? COLORS.light.success : '#b1b1b1'}
      />
      <MaterialIcons
        style={[
          style.outlineCard,
          {height: 'auto', width: 'auto', padding: SIZES.nano},
        ]}
        name="close"
        size={16}
        color={!props.isPresent ? 'red' : '#b1b1b1'}
      />
    </View>
  );
};

export default AttendanceWeek;
