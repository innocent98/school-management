import {View, ActivityIndicator} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import SmallText from '../../../components/widgets/SmallText';
import {COLORS, SIZES} from '../../../constants';
import {result} from '../../../constants/dummy';
import {style} from '../../../constants/style';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import Input from '../../../components/widgets/Input';

type Props = {
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
};

const EditResult = (props: Props) => {
  const {itemWidth} = ScreenSizes();

  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      props.setIsEdit(true);
      setIsLoading(false);
      timeout = setTimeout(() => {
        props.setIsEdit(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <View style={{marginTop: 50, width: '100%'}}>
      <View style={[style.card, {width: '100%'}]}>
        <SmallText
          text="Input/Edit Candidate's Result"
          textColor={COLORS.light.secondary}
        />

        {result.map(r => (
          <>
            {!r.sub && (
              <View key={r.id} style={{marginTop: SIZES.medium}}>
                <SmallText
                  text={r.code || ''}
                  textColor={COLORS.light.primary}
                />

                <Input
                  placeholder={r.score?.toString() || ''}
                  defaultValue={r.score?.toString()}
                  placeholderColor={COLORS.light.gray}
                  borderColor={COLORS.light.lightgray}
                  width={itemWidth * 0.88}
                  color={COLORS.light.gray}
                />
              </View>
            )}
          </>
        ))}

        {isLoading ? (
          <ActivityIndicator color={COLORS.secondary} />
        ) : (
          <Button
            btnText={'Save'}
            textColor={COLORS.light.white}
            buttonColor={COLORS.light.primary}
            width={itemWidth * 0.4}
            onPress={handleAdd}
          />
        )}
      </View>
    </View>
  );
};

export default EditResult;
