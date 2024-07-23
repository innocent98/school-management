import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../../../constants/style';
import AttendanceWeek from './AttendanceWeek';
import ScreenSizes from '../../../constants/utils/ScreenSizes';

type Props = {
  id: number;
  name: string;
  code: string;
  sex: string;
  isHostel: boolean;
  level: number;
};

type WeekProps = React.ComponentProps<typeof AttendanceWeek>;

const Attendance = (props: Props) => {
  const week = props as unknown as WeekProps;

  const {itemWidth} = ScreenSizes();

  return (
    <View style={style.tableBody} key={props.id}>
      <Text style={[style.tableItem, {width: itemWidth * 0.6}]}>
        {props.name}
      </Text>
      <Text style={style.tableItem}>{props.code}</Text>
      <AttendanceWeek {...week} />
    </View>
  );
};

export default Attendance;
