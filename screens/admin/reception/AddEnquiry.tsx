import {AnimatePresence, MotiView} from 'moti';
import React, {SetStateAction, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../constants';
import {religionData, genderData} from '../../../constants/dummy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import {style} from '../../../constants/style';
import Input from '../../../components/widgets/Input';

type Props = {
  setAdd: React.Dispatch<SetStateAction<boolean>>;
  setIsAdd: React.Dispatch<SetStateAction<boolean>>;
};

const AddEnquiry = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      props.setIsAdd(true);
      setIsLoading(false);
      props.setAdd(false);
      timeout = setTimeout(() => {
        props.setIsAdd(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <AnimatePresence>
      <MotiView
        from={{bottom: -50, opacity: 0.5}}
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
          placeholder={'Name'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Contact Number'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Email'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Date of Enquiry'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <SelectList
          setSelected={(val: string) => console.log(val)}
          data={religionData}
          save="value"
          placeholder="Enquiry Type"
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

        <SelectList
          setSelected={(val: string) => console.log(val)}
          data={religionData}
          save="value"
          placeholder="Enquiry Source"
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

        <Input
          placeholder={'Enquiry Details'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <SelectList
          setSelected={(val: string) => console.log(val)}
          data={genderData}
          save="value"
          placeholder="Status"
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

        <Input
          placeholder={'Remark'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Enquiry'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.4}
            onPress={handleAdd}
          />
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddEnquiry;
