import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../../constants';
import {faculties} from '../../../../constants/dummy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import Input from '../../../../components/widgets/Input';
import Button from '../../../../components/widgets/Button';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddDepartment: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const {itemWidth} = ScreenSizes();

  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faculty = faculties.map(faculty => {
    return {key: faculty.id, value: faculty.faculty};
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
          //   maxHeight={Dimensions.get('window').height * 0.4}
        />

        <Input
          placeholder={'Department'}
          placeholderColor={COLORS.light.gray}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.white}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Department'}
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

export default AddDepartment;
