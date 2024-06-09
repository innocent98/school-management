import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {COLORS} from '../../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../../components/widgets/Button';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import Input from '../../../../components/widgets/Input';
import {style} from '../../../../constants/style';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddSession: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const {itemWidth} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);

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

        <Input
          placeholder={'Session/Semester'}
          placeholderColor={COLORS.light.gray}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Session'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.secondary}
            width={itemWidth * 0.3}
            onPress={handleAdd}
          />
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddSession;
