import React, { useState } from 'react';
import { View, StatusBar, Text,Pressable} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { WalkStyle } from './styles/WalkStyle';
import theme, { DGREEN, LIGHTGREY, WHITE } from './constant/theme.js';
import IntroSliderFirstImage from '../svg/IntroSliderFirstImage';
import IntroSliderSecondImage from '../svg/IntroSliderSecondImage';
import IntroSliderThirdImage from '../svg/IntroSliderThirdImage';
import { AUTH_TYPE } from './redux/action/authAction';

const data = [
  {
    id: "1",
    hightlightText: " “Get Well Now, Pay Later” ",
    title: "service and be more flexible and efficient with your medical expenses!.",
    text: 'Get Well Now, Pay Later',
    text1: "Use our",
    path: <IntroSliderFirstImage width={widthPercentageToDP(90)} height={heightPercentageToDP(30)}></IntroSliderFirstImage>,
  },
  {
    id: "2",
    hightlightText1: " It’s that easy!",
    title: "Book a Doctor’s Appointment from the comfort of your home – with just a few clicks.",
    text: 'Book Your Appointment',
    path: <IntroSliderSecondImage width={widthPercentageToDP(90)} height={heightPercentageToDP(30)}></IntroSliderSecondImage>,
  },
  {
    id: "3",
    hightlightText1: " We’ve Got You Covered!",
    title: "Pay Medical Bills using Credit Cards/ Debit Cards/ UPI or Bank Account –",
    text: 'Pay via any payment channel',
    path: <IntroSliderThirdImage width={widthPercentageToDP(90)} height={heightPercentageToDP(30)}></IntroSliderThirdImage>,
  },
];

const IntroSliderScreen = () => {
  const dispatch = useDispatch();
  const [cuurentIndex, setIndex] = useState(0);
  const _renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <View style={{ marginTop: "15%" }}>
          <View style={WalkStyle.imageView}>
            {item.path}
          </View>
          <View>
            <Text style={WalkStyle
              .text}>{item.text}</Text>
            <Text numberOfLines={3} style={WalkStyle.subtext}>
              <Text style={WalkStyle.subtext}>{item.text1}</Text>
              <Text style={WalkStyle.hightlightText}>{item.hightlightText}</Text>
              {item.title}<Text style={WalkStyle.hightlightText1}>{item.hightlightText1}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
  const _onDone = () => {
    dispatch({ type: AUTH_TYPE.ONBOARDING_DONE });
  }

  const renderDoneButton = () => {
    return (
      <Pressable onPress={() => _onDone()} accessible={true}
        testID="next_button"
        accessibilityLabel="next_button" style={WalkStyle.continuebtn}>
        <Text accessible={true}
          testID="next_text"
          accessibilityLabel="next_text" style={WalkStyle.introCntBtn}>NEXT</Text>
      </Pressable>
    )
  }
  const onSlideChange = (e) => {
    setIndex(e)
  }
  return (
    <SafeAreaView style={{ paddingBottom: heightPercentageToDP(10), backgroundColor: WHITE, flex: 1 }}>
      <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
      <View style={{ alignSelf: "flex-end", width: widthPercentageToDP(20), left: 15 }}>
        <Pressable testID='skip_intro_button' onPress={() => _onDone()} style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 }
        ]}>
          <Text style={WalkStyle.skipBtn}>  {cuurentIndex <= 1 ? 'Skip' : ''}
          </Text>
        </Pressable>
      </View>
      <AppIntroSlider renderItem={_renderItem} data={data} showNextButton={false} onDone={_onDone}
        onSlideChange={onSlideChange}
        activeDotStyle={{ width: 23, backgroundColor: DGREEN, top: heightPercentageToDP(8), marginLeft: heightPercentageToDP(1), marginRight: heightPercentageToDP(1) }}
        dotStyle={{ backgroundColor: LIGHTGREY, top: heightPercentageToDP(8), marginLeft: heightPercentageToDP(1), marginRight: heightPercentageToDP(1) }}
        renderDoneButton={renderDoneButton} />
    </SafeAreaView >
  )
}
export default IntroSliderScreen;