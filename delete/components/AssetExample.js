import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');
const logoOne = require("../assets/image/logo.png");
const logoTwo = require("../assets/image/logo.png");
const cardOne = require("../assets/image/tomats.png");
const cardTwo = require("../assets/image/events-banner.png");
const cardThree = require("../assets/image/beer-slider.png");
const cards = [
    {
        title: 'Неделя томатов на рынке',
        caption: 'Только',
        data: '26.10',
        image: cardOne,
        logo: logoOne,
    },
    {
        title: 'Неделя сыров на рынке',
        caption: 'Только',
        data: '27.10',
        image: cardTwo,
        logo: logoTwo,
    },
    {
        title: 'Пивной день!',
        caption: 'Только',
        data: '28.10',
        image: cardThree,
        logo: logoOne,
    }
];

export default class TopCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 165 } });
  };

  render() {
    const pages = generatePages();
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          currentPage={2}
          onAnimateNextPage={p => console.log(p)}>
            {pages}
        </Carousel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#171717',
    // height: 165,
    elevation: 3,
    width: width,
  },
  backgroundImage: {
  justifyContent: 'space-between',
  backgroundColor:'transparent',
  alignItems: 'flex-start',
},
cardLogo: {
  height: 42,
  width: 80,
  resizeMode: 'contain',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
cardLogoWrapper: {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  textAlign: 'left',
  paddingLeft: 30,
  paddingTop: 30,
  width: '60%',
},
cardDataWrapper: {
  width: '100%',
  position: 'absolute',
  right: 0,
  bottom: -15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
},
cardTitle: {
  color: '#ffffff',
  fontSize: 24,
  fontWeight: '700',
},
cardData: {
  color: '#ffffff',
  fontSize: 60,
  fontWeight: '900',
},
cardCaption: {
  color: '#ffffff',
  fontSize: 10,
  fontWeight: '700',
}
});


const generatePages = () =>
    cards.map((item, i) => (
          <View style={styles.cardContainer}   key={item.toString()}>
            <ImageBackground style={[styles.backgroundImage, {height: '100%', width: '100%'}]}  source={item.image}>
                <View style={styles.cardLogoWrapper}>
                  <Image style={styles.cardLogo} source={item.logo} />
                  <Text style={styles.cardTitle} >{item.title}</Text>
                </View>
                <View style={styles.cardDataWrapper}>
                  <Text style={styles.cardCaption}>{item.caption}</Text>
                  <Text style={styles.cardData}>{item.data}</Text>
                </View>
            </ImageBackground>
          </View>
         ))
