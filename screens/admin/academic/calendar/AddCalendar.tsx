import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../../components/widgets/Input';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import {style} from '../../../../constants/style';
import Button from '../../../../components/widgets/Button';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddCalendar: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const {itemWidth, itemHeight} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: 'Fall Semester'},
    {key: '2', value: 'Spring Semester'},
    {key: '3', value: 'Summer Semester'},
  ];

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsAdd(true);
      setIsLoading(false);
      setAdd(false);
      timeout = setTimeout(() => {
        setIsAdd(false);
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
          color={COLORS.light.black}
          style={style.closeIcon}
          onPress={() => setAdd(false)}
        />

        <SelectList
          setSelected={(value: string) => setSelected(value)}
          data={data}
          save="value"
          placeholder="Semester"
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
          placeholder={'Date'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Event'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Calendar'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.42}
            onPress={handleAdd}
          />
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddCalendar;
