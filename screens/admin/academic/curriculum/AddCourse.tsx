import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../../constants';
import {faculties, departments} from '../../../../constants/dummy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import {style} from '../../../../constants/style';
import Button from '../../../../components/widgets/Button';
import Input from '../../../../components/widgets/Input';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddCourse: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const {itemWidth} = ScreenSizes();

  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faculty = faculties.map(faculty => {
    return {key: faculty.id, value: faculty.faculty};
  });

  const department = departments.map(department => {
    return {key: department.id, value: department.department};
  });

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
          data={faculty}
          save="value"
          placeholder="Select Faculty"
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
          setSelected={(value: string) => setSelected(value)}
          data={department}
          save="value"
          placeholder="Select Department"
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
          placeholder={'Course Title'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Course Code'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Course Unit'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Lecturer In Charge'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Course'}
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

export default AddCourse;
