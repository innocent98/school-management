import {Text, ActivityIndicator, TextInput} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import DatePicker from 'react-native-date-picker';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants';
import {styles} from '../../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  setAdd: React.Dispatch<SetStateAction<boolean>>;
  setIsAdd: React.Dispatch<SetStateAction<boolean>>;
};

const AddVisitor = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState(new Date());
  const [exist, setExist] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [openExit, setOpenExit] = useState(false);

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
        style={styles.addContainer}>
        <MaterialIcons
          name="close"
          size={22}
          color="#000"
          style={styles.closeIcon}
          onPress={() => props.setAdd(false)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Visiting Purpose"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Contact Number"
          placeholderTextColor="#000"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Visitor Details"
          placeholderTextColor="#000"
          multiline
        />
        <Text style={styles.editLabel}>Date of Visit</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Date of Visit"
          placeholderTextColor="#000"
          onPressIn={() => setOpen(true)}
          value={date.toLocaleDateString()}
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
        <Text style={styles.editLabel}>Entry Time</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Entry Time"
          placeholderTextColor="#000"
          onPressIn={() => setOpenEntry(true)}
          value={entry.toTimeString()}
        />
        <DatePicker
          modal
          mode="time"
          open={openEntry}
          date={entry}
          onConfirm={entryTime => {
            setOpenEntry(false);
            setEntry(entryTime);
          }}
          onCancel={() => {
            setOpenEntry(false);
          }}
        />
        <Text style={styles.editLabel}>Exit Time</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Exit Time"
          placeholderTextColor="#000"
          onPressIn={() => setOpenExit(true)}
          value={exist.toTimeString()}
        />
        <DatePicker
          modal
          mode="time"
          open={openExit}
          date={exist}
          onConfirm={exitTime => {
            setOpenExit(false);
            setExist(exitTime);
          }}
          onCancel={() => {
            setOpenExit(false);
          }}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Whom to See/Meet"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Remark"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Visitor</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddVisitor;
