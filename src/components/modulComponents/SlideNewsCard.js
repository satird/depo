import React, { PropTypes } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const cardOne = require("../../assets/image/news-block-1.png");
const cardTwo = require("../../assets/image/markets-block.png");
const cardThree = require("../../assets/image/news-detail-banner.png");
const cardFour = require("../../assets/image/news-block-1.png");
const cardFive = require("../../assets/image/markets-block.png");
const cardSix = require("../../assets/image/news-detail-banner.png");


const datas = [
  {
    img: cardOne,
    title: "Новый томатный суп!",
    address: "ул. Абрикосова 45",
    id: 1,
  },
  {
    img: cardTwo,
    title: 'В лавке “Белыйсыр” появился сыр Origona',
    address: "ул. Абрикосова 45",
    id: 2,
  },
  {
    img: cardThree,
    title: "Новый томатный суп!",
    address: "ул. Абрикосова 45",
    id: 3,
  },
  {
    img: cardFour,
    title: 'В лавке “Белыйсыр” появился сыр Origona',
    address: "ул. Абрикосова 45",
    id: 4,
  },
  {
    img: cardFive,
    title: "Новый томатный суп!",
    address: "ул. Абрикосова 45",
    id: 5,
  },
  {
    img: cardSix,
    title: 'В лавке “Белыйсыр” появился сыр Origona',
    address: "ул. Абрикосова 45",
    id: 6,
  },
];
// import { TMDB_IMG_URL } from '../../../constants/api';

const CardNews = () => (
datas.map((data, id) => (
	<TouchableOpacity style={styles.cardContainerLink} activeOpacity={0.8}  key={data.id}>
		<View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
			   <Image source={data.img} style={styles.cardImage} />
      </View>
			<View style={styles.cardContentContainer}>
				<Text style={styles.cardTitle} numberOfLines={3}>
					{data.title}
				</Text>
        <Text style={styles.cardData} numberOfLines={1}>
					{data.address}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
  ))
);

const styles = StyleSheet.create({
	cardContainerLink: {
		width: 128,
		backgroundColor: 'transparent',
		marginHorizontal: 10,
		overflow: 'hidden',
	},
	cardContainer: {
		height: '100%',
	},
	cardImageContainer: {
		width: '100%',
		height: 97,
		overflow: 'hidden',
		flex: 2,
		flexGrow: 0,
	},
	cardImage: {
		width: undefined,
		height: undefined,
		flex: 1,
	},
	cardContentContainer: {
		paddingVertical: 7,
		flex: 1,
	},
	cardTitle: {
		fontSize: 15,
		fontWeight: '900',
		color: '#f9f9f9',
	},
	cardData: {
		fontSize: 12,
		fontWeight: '400',
		color: '#f9f9f9',
	},
})
// CardDish.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default CardNews;
