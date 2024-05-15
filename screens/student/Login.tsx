import {useState} from 'react';
import {View, SafeAreaView, ImageBackground, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {login} from '../../redux/apiCalls';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import {style} from '../../constants/style';
import {bgImg} from '../../constants/utils/vars';
import InputPaper from '../../components/widgets/InputPaper';
import ScreenSizes from '../../constants/utils/ScreenSizes';
import Button from '../../components/widgets/Button';
import SmallText from '../../components/widgets/SmallText';
import LogoBanner from '../../components/LogoBanner';

const Login = () => {
  const {itemWidth} = ScreenSizes();

  const dispatch = useDispatch();
  // const {isFetching} = useSelector(state => state.user);
  const [user, setUser] = useState({username: '', password: ''});

  const handleUsername = (value: string) => {
    setUser(prev => ({...prev, username: value.trim()}));
  };

  const handlePassword = (value: string) => {
    setUser(prev => ({...prev, password: value.trim()}));
  };

  const handleLogin = () => {
    if (user.username === '' || user.password === '') {
      Alert.alert('Username or password is empty');
      return;
    } else {
      login(dispatch, user);
    }
  };

  console.log(user);

  return (
    <SafeAreaView style={style.safeArea}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />

      <ImageBackground
        style={style.bgImg}
        source={{
          uri: bgImg,
        }}
        resizeMode={'cover'}>
        <View
          style={[
            style.container,
            {height: '100%', justifyContent: 'center', gap: SIZES.l},
          ]}>
          <LogoBanner />

          <View style={style.card}>
            <View style={style.column}>
              <InputPaper
                label={'Username'}
                placeholderTextColor={COLORS.light.gray}
                activeOutlineColor={COLORS.light.primary}
                backgroundColor={COLORS.light.white}
                width={itemWidth * 0.7}
                onChangeText={value => handleUsername(value)}
              />

              <InputPaper
                label={'Password'}
                placeholderTextColor={COLORS.light.gray}
                activeOutlineColor={COLORS.light.primary}
                backgroundColor={COLORS.light.white}
                width={itemWidth * 0.7}
                secureTextEntry={true}
                onChangeText={value => handlePassword(value)}
              />

              <Button
                btnText={'Login'}
                textColor={COLORS.light.white}
                buttonColor={COLORS.light.primary}
                width={itemWidth * 0.7}
                onPress={handleLogin}
              />

              <SmallText
                text="Lost your password?"
                textColor={COLORS.light.gray}
              />
              <SmallText
                text="Go to IAEC-TOGO University"
                textColor={COLORS.light.secondary}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
