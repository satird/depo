import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

import ToggleTheme from '../components/ToggleTheme';

const window = Dimensions.get('window');

const cardOne = require("../assets/image/download-image.png");
const userDatas = [
  {
    img: cardOne,
    userName: "Анна",
    userNumber: "+7 916 666 77 88",
    index: 1,
  },
];
const bannerDatas = [
  {
    bgColor: '#1d9d5f',
    bonus: "500",
    index: 2,
  },
];

const LkHeding = () => {
  const isLoggeIn = true;
  const changeFoto = (
    <View style={styles.lkContainerHeadingImageContainer}>
      <Text style={styles.lkContainerHeadingImageNote}>Изменить</Text>
    </View>
  );
  return (
    userDatas.map((data, index) => (
    <View style={styles.lkContainerHeading}  key={data.index}>
      <View style={styles.lkContainerHeadingLeft}>
        <ImageBackground source={data.img} style={styles.lkContainerHeadingImage}>
          {isLoggeIn ? changeFoto : null}
        </ImageBackground>
      </View>
      <View style={styles.lkContainerHeadingRight}>
        <Text style={styles.lkContainerHeadingName}>{data.userName}</Text>
        <Text style={styles.lkContainerHeadingNumber}>{data.userNumber}</Text>
      </View>
    </View>
  ))
  );
};

const Bonus = () => {
  return (
    bannerDatas.map((item, index) => (
      <View style={[styles.lkBanner, {backgroundColor:item.bgColor}]} key={item.index}>
        <View style={styles.lkBannerTop}>
          <Text style={styles.lkBannerBonus}>{item.bonus}</Text>
          <View>
            <Text style={styles.lkBannerTitle}>{'Бонусы'.toUpperCase()}</Text>
              <Text style={styles.lkBannerCaption}>накоплено</Text>
          </View>
        </View>
        <View style={styles.lkBannerLow}>
          <Text style={styles.lkBannerDiscription}>Бонусы начисляются за любые покупки в пределах ДЕПО. Бонусы можно потратить на любые предложения внутри приложения.</Text>
        </View>
      </View>
    ))
  );
};
export default class Page5 extends Component {
  render() {
    return (
      <ScrollView style={styles.lkContainer}>
        <LkHeding />
        <View style={styles.lkContainerMain}>
          <Bonus />
          <View>
            <Text>Мои данные</Text>
          </View>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
	lkContainer: {
    flex: 1,
		backgroundColor: '#ffffff',
		width: window.width,
	},
  lkContainerHeadingImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 17,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lkContainerHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    backgroundColor: '#f7f7f7',
  },
  lkContainerHeadingImageContainer: {
    backgroundColor: '#000000',
    height: 20,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lkContainerHeadingImageNote: {
    color: '#ffffff',
    fontSize: 10,
  },
  lkContainerHeadingName: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
  },
  lkContainerHeadingNumber: {
    fontSize: 15,
    fontWeight: '300',
    color: '#000000',
  },
  lkContainerMain: {
    paddingTop: 17,
    paddingBottom: 32,
    paddingHorizontal: 13,
  },
  lkBanner: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  lkBannerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#75c39d",
    paddingBottom: 20,
    marginBottom: 20,
  },
  lkBannerBonus: {
    fontSize: 55,
    fontWeight: '900',
    color: '#ffffff',
    marginRight: 10,
  },
  lkBannerTitle: {
    fontSize: 13,
    fontWeight: '300',
    color: '#ffffff',
  },
  lkBannerCaption: {
    fontSize: 12,
    fontWeight: '900',
    color: '#ffffff',
  },
  lkBannerDiscription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
  }
});

  // <ToggleTheme />
