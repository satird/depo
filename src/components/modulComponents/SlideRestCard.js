import React, { PropTypes } from 'react';
import {
	Image,
  StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

// const cardOne = require("../../assets/image/markets-block.png");
// const cardTwo = require("../../assets/image/news-block-1.png");
// const cardThree = require("../../assets/image/news-detail-banner.png");
// const cardFour = require("../../assets/image/tomats.png");
// const cardFive = require("../../assets/image/events-banner.png");
// const cardSix = require("../../assets/image/beer-slider.png");
// const cardLogo1 = require("../../assets/image/buffalo-wild-wings-logo-1.png");


// const datas = [
//   {
//     img: cardOne,
//     logo: cardLogo1,
//     title: "Раклет",
//     note: "швейцарская, сырная",
//     address: "Павильон 23",
//     id: 1,
//     bgcolor: "#7b3a93"
//   },
//   {
//     img: cardTwo,
//     logo: cardLogo1,
//     title: "Томатокс",
//     note: "помидоры, огурцы, зелень",
//     address: "Павильон 23",
//     id: 3,
//     bgcolor: "#e8b400"
//   },
//   {
//     img: cardThree,
//     logo: cardLogo1,
//     title: "Раклет",
//     note: "швейцарская, сырная",
//     address: "Павильон 23",
//     id: 2,
//     bgcolor: "#7b3a93"
//   },
//   {
//     img: cardFour,
//     logo: cardLogo1,
//     title: "Томатокс",
//     note: "помидоры, огурцы, зелень",
//     address: "Павильон 23",
//     id: 4,
//     bgcolor: "#e8b400"
//   },
//   {
//     img: cardFive,
//     logo: cardLogo1,
//     title: "Раклет",
//     note: "швейцарская, сырная",
//     address: "Павильон 23",
//     id: 5,
//     bgcolor: "#7b3a93"
//   },
//   {
//     img: cardSix,
//     logo: cardLogo1,
//     title: "Томатокс",
//     note: "помидоры, огурцы, зелень",
//     address: "Павильон 23",
//     id: 6,
//     bgcolor: "#e8b400"
//   },
// ];
// import { TMDB_IMG_URL } from '../../../constants/api';

const CardRest = ({img, logo, title, note, address, bgcolor }) => (
	<TouchableOpacity style={[styles.cardContainerLink, {backgroundColor: bgcolor}]} activeOpacity={0.8}>
		<View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
			   <Image source={img} style={styles.cardImage} />
      </View>
      <View style={styles.cardContentContainer}>
        <View style={styles.cardLogo}>
          <Image source={logo} style={styles.cardLogoImage} />
        </View>
  			<View style={styles.cardContextContainer}>
  				<Text style={styles.cardTitle} numberOfLines={1}>
  					{title}
  				</Text>
          <Text style={styles.cardNote} numberOfLines={1}>
  					{note}
  				</Text>
          <Text style={styles.cardAddress} numberOfLines={1}>
  					{address}
  				</Text>
  			</View>
      </View>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainerLink: {
    width: 250,
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  cardContainer: {
    height: '100%',
  },
  cardImageContainer: {
    width: '100%',
    height: 122,
    overflow: 'hidden',
    flex: 2,
  },
  cardImage: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  cardLogo: {
    width: 69,
    height: 44,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 12,
  },
  cardLogoImage: {
    resizeMode: 'center',
    flex: 1,
  },
  cardContentContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#ffffff',
    paddingBottom: 5,
  },
  cardNote: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    paddingBottom: 5,
  },
  cardAddress: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
  },
});

export default CardRest;
