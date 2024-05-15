import {Text, ActivityIndicator, TextInput} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants';
import {styles} from '../../../constants/styles';
import DocumentPicker from 'react-native-document-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  setAdd: (value: boolean) => void;
  setIsAdd: (value: boolean) => void;
}

const AddLibrary: React.FC<Props> = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState('');
  const [urlFileName, setUrlFileName] = useState<string | null>('');

  const openPdfLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFile(res[0].uri);
      setUrlFileName(res[0].name);
    } catch (error) {}
  };

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
        <TextInput
          style={styles.addInput}
          placeholder="Book Title"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Book Author"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Upload Book"
          placeholderTextColor="#000"
          value={urlFileName || ''}
          onPressIn={openPdfLibrary}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Library</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

export default AddLibrary;
