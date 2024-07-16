import {ActivityIndicator} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {COLORS} from '../../../constants';
import {courseList} from '../../../constants/dummy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../components/widgets/Input';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Button from '../../../components/widgets/Button';
import { style } from '../../../constants/style';

type Props = {
  setAdd: React.Dispatch<SetStateAction<boolean>>;
  setIsAdd: React.Dispatch<SetStateAction<boolean>>;
};

const AddResult = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = courseList.map(item => {
    return {key: item.id, value: item.code};
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
          placeholder={'Semester/Session'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {/* <MultipleSelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            placeholder="Select Exams to be registered"
            boxStyles={styles.addInput}
            dropdownStyles={styles.dropdown}
            search={false}
            dropdownTextStyles={{color: '#000'}}
            inputStyles={{color: '#000'}}
          /> */}

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Record'}
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

export default AddResult;
