import React, { Component } from 'react';
import {Platform, StyleSheet, AppRegistry, Image, View, Dimensions, ImageBackground } from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// export default class TopNext extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
const logoOne = require("../assets/image/logo.png");
const logoTwo = require("../assets/image/logo.png");
const cardOne = require("../assets/image/tomats.png");
const cardTwo = require("../assets/image/events-banner.png");
const cardThree = require("../assets/image/beer-slider.png");

const window = Dimensions.get('window');
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
export default class TopNext extends Component {
  render() {
    // let {height, width} = Dimensions.get('window');
      return (
              <View style={{height: 165, width: window.width}}>
                  <DeckSwiper
                      dataSource={cards}
                      renderItem={item =>
                          <Card transparent style={styles.cardContainer}>
                            <ImageBackground style={[styles.backgroundImage, {height: '100%', width: '100%'}]} source={item.image}>
                                <View style={styles.cardLogoWrapper}>
                                  <Image style={styles.cardLogo} source={item.logo} />
                                  <Text style={styles.cardTitle} >{item.title}</Text>
                                </View>
                                <View style={styles.cardDataWrapper}>
                                  <Text style={styles.cardCaption}>{item.caption}</Text>
                                  <Text style={styles.cardData}>{item.data}</Text>
                                </View>
                            </ImageBackground>
                          </Card>
                      }
                  />
              </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#171717',
      height: 165,
      elevation: 3,
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
    bottom: -20,
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
