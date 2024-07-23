import {View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../../../constants/styles';
import {style} from '../../../constants/style';
import {SIZES} from '../../../constants';

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
        color={props.isPresent ? 'teal' : '#000'}
      />
      <MaterialIcons
        style={[
          style.outlineCard,
          {height: 'auto', width: 'auto', padding: SIZES.nano},
        ]}
        name="close"
        size={16}
        color={props.isPresent === false ? 'red' : '#000'}
      />
    </View>
  );
};

export default AttendanceWeek;
