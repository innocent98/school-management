import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {style} from '../../../../constants/style';
import ScreenSizes from '../../../../constants/utils/ScreenSizes';
import Input from '../../../../components/widgets/Input';
import SmallText from '../../../../components/widgets/SmallText';
import Button from '../../../../components/widgets/Button';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddAssignment: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const {itemWidth} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);
  const [assigned, setAssigned] = useState(new Date());
  const [submission, setSubmission] = useState(new Date());
  const [openAssigned, setOpenAssigned] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);

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
          placeholder={'Course Code'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        <Input
          placeholder={'Assignment'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
          multiline
        />

        <SmallText text="Assigned Date" textColor={COLORS.light.secondary} />

        <Input
          placeholder={'Assigned Date'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
          onPressIn={() => setOpenAssigned(true)}
          value={assigned.toLocaleDateString()}
        />

        <DatePicker
          modal
          mode="date"
          open={openAssigned}
          date={assigned}
          onConfirm={assigned => {
            setOpenAssigned(false);
            setAssigned(assigned);
          }}
          onCancel={() => {
            setOpenAssigned(false);
          }}
        />

        <SmallText text="Submission Date" textColor={COLORS.light.secondary} />

        <Input
          placeholder={'Submission Date'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
          onPressIn={() => setOpenSubmission(true)}
          value={submission.toLocaleDateString()}
        />

        <DatePicker
          modal
          mode="date"
          open={openSubmission}
          date={submission}
          onConfirm={submission => {
            setOpenSubmission(false);
            setSubmission(submission);
          }}
          onCancel={() => {
            setOpenSubmission(false);
          }}
        />

        <Input
          placeholder={'Lecturer'}
          placeholderColor={COLORS.light.black}
          borderColor={COLORS.light.lightgray}
          width={itemWidth * 0.9}
          color={COLORS.light.black}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.light.secondary} />
        ) : (
          <Button
            btnText={'Add Assignment'}
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

export default AddAssignment;
