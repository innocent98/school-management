import {useState, useEffect} from 'react';
import {View, Alert, SafeAreaView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {COLORS, SIZES} from '../constants';
import {styles} from '../constants/styles';
import {style} from '../constants/style';
import LogoBanner from '../components/LogoBanner';
import {quoteUrl} from '../constants/utils/vars';
import TopComponent from '../components/TopComponent';
import StudentDrawer from '../components/StudentDrawer';
import SlideAnimation from '../components/SlideAnimation';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <FastImage
        style={styles.logo}
        source={{
          uri: 'https://iaec-university.tg/wp-content/uploads/2020/01/iaec-university-logo.png',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const Home = () => {
  const {slideAnim, slideIn, slideOut} = SlideAnimation();
  const [quotes, setQuotes] = useState<any>({});

  const currentTime = new Date();
  const time = currentTime.getHours();

  const getQuotes = async () => {
    await fetch(quoteUrl)
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        setQuotes(data[Math.floor(Math.random() * data.length)]);
      })
      .catch(err => {
        Alert.alert(err.response.message);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getQuotes();
    }, 86400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      <TopComponent slideIn={slideIn} />
      <StudentDrawer slideAnim={slideAnim} slideOut={slideOut} />

      <View style={[style.container, {gap: SIZES.l}]}>
        <LogoBanner />

        <View style={[style.column]}>
          <View style={style.card}>
            <Text style={styles.welcomeText}>
              {time < 12 ? 'Morning' : time < 17 ? 'Afternoon' : 'Evening'},
              ADEBAYO VICTOR OLUWATOSIN
            </Text>
            <Text style={styles.text}>Welcome to IAEC-TOGO student portal</Text>
            <Icon name="emoji-emotions" size={40} color={COLORS.primary} />
          </View>

          <View style={style.card}>
            <Text style={styles.quoteText}>
              Quote of the day! {time < 12 ? '🌅' : time < 17 ? '🌤️' : '🌇'}🌈
            </Text>
            <Text style={styles.text}>{quotes.text}</Text>
            <Text style={styles.text}>~ {quotes.author}✨</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
