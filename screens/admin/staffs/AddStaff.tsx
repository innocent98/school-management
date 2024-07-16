import {AnimatePresence, MotiView} from 'moti';
import React, {SetStateAction, useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {style} from '../../../constants/style';
import Input from '../../../components/widgets/Input';
import {COLORS} from '../../../constants';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Button from '../../../components/widgets/Button';

type Props = {
  setAdd: React.Dispatch<SetStateAction<boolean>>;
};

const AddStaff = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Lecturer'},
    {key: '3', value: 'Bursar'},
    {key: '4', value: 'Admission Officer'},
    {key: '5', value: 'Other Staff'},
  ];

  return (
    <AnimatePresence>
      <MotiView
        from={{bottom: 0, opacity: 0.5}}
        animate={{bottom: 0, opacity: 1}}
        exit={{bottom: 0, opacity: 0.5}}
        style={[style.card, {position: 'absolute', bottom: 0, zIndex: 9}]}>
        <MaterialIcons
          name="close"
          size={22}
          color="#000"
          style={style.closeIcon}
          onPress={() => props.setAdd(false)}
        />
        <Input
          placeholder={'Full Name'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Course'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <SelectList
          setSelected={(value: any) => setSelected(value)}
          data={data}
          save="value"
          placeholder="Select Role"
          inputStyles={{
            width: itemWidth * 0.9,
            borderRadius: 20,
            color: COLORS.light.black,
          }}
          dropdownTextStyles={{
            width: itemWidth * 0.9,
            borderRadius: 20,
            color: COLORS.light.black,
          }}
          boxStyles={{
            width: itemWidth * 0.9,
            borderColor: COLORS.light.lightgray,
          }}
          dropdownStyles={style.dropdown}
          search={false}
        />

        <Button
          btnText={'Add Staff'}
          textColor={COLORS.light.white}
          buttonColor={COLORS.light.secondary}
          width={itemWidth * 0.4}
          onPress={() => {}}
        />
      </MotiView>
    </AnimatePresence>
  );
};

export default AddStaff;
