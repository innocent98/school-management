import {ActivityIndicator} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../constants';
import {options} from '../../../constants/dummy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../components/widgets/Input';
import {style} from '../../../constants/style';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Button from '../../../components/widgets/Button';

type Props = {
  setIsAdd: React.Dispatch<SetStateAction<boolean>>;
  setAdd: React.Dispatch<SetStateAction<boolean>>;
};

const AddExam = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const option = options.map(option => {
    return {key: option.id, value: option.option};
  });

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
          placeholder={'Question No'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Question'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Option A'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Option B'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Option c'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Option D'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <SelectList
          setSelected={(value: any) => setSelected(value)}
          data={option}
          save="value"
          placeholder="Enter correct option"
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

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Question'}
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

export default AddExam;
