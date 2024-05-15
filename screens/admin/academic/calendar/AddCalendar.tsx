import {Text, ActivityIndicator, TextInput} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {SelectList} from 'react-native-dropdown-select-list';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS} from '../../../../constants';
import {styles} from '../../../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddCalendar: React.FC<Props> = ({setAdd, setIsAdd}) => {
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
        style={styles.addContainer}>
        <MaterialIcons
          name="close"
          size={22}
          color="#000"
          style={styles.closeIcon}
          onPress={() => setAdd(false)}
        />
        <SelectList
          setSelected={(value: string) => setSelected(value)}
          data={data}
          save="value"
          placeholder="Semester"
          inputStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          search={false}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Date"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Event"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Calendar</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddCalendar;
