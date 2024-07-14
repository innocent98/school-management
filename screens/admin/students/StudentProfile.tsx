import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import LogoBanner from '../../../components/LogoBanner';
import {COLORS, SIZES} from '../../../constants';
import {style} from '../../../constants/style';
import CustomImage from '../../../constants/utils/CustomImage';
import SmallText from '../../../components/widgets/SmallText';
import Button from '../../../components/widgets/Button';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import {NavigationProp} from '../../../constants/utils/navigationProp';

type Props = {
  name: string;
  code: string;
  level: string;
};

const StudentProfile = ({route}: any) => {
  const {itemWidth} = ScreenSizes();

  const {item} = route.params;
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <CustomImage imageUrl="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />

          <View
            style={[
              style.column,
              {gap: SIZES.xl, marginTop: SIZES.xl, alignItems: 'flex-start'},
            ]}>
            <SmallText text={`Student Name: ${item.name}`} />
            <SmallText text={`Matric No: ${item.code}`} />
            <SmallText text={`Student Current Level: ${item.level}`} />
            <SmallText text={`Department: ${item.level}`} />
            <SmallText text={`Faculty: ${item.level}`} />
            <SmallText text={`Date of Admission: ${item.level}`} />
            <SmallText
              text={`Basic Information`}
              onPress={() => navigation.navigate('BasicInformation', {item})}
            />
            <SmallText
              text={`Parent's Information`}
              onPress={() => navigation.navigate('ParentInformation', {item})}
            />
            <SmallText
              text={`Contact Information`}
              onPress={() => navigation.navigate('ContactInformation', {item})}
            />
            <SmallText
              text={`Document Information`}
              onPress={() => navigation.navigate('DocumentInformation', {item})}
            />
            <SmallText
              text={`Manage Fees`}
              onPress={() => navigation.navigate('ManageFees', {item})}
            />
            <SmallText
              text={`Manage Result`}
              onPress={() => navigation.navigate('ManageResults', {item})}
            />
            <SmallText text={`Manage Attendance: ${item.name}`} />
            <SmallText text={`registered Courses: ${item.name}`} />

            <View style={{alignSelf: 'center'}}>
              <Button
                btnText={"Disable Student's portal"}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.secondary}
                width={itemWidth * 0.7}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentProfile;
