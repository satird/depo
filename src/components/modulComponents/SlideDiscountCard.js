import React, { PropTypes } from 'react';
import {
	Image,
	StyleSheet,
	ImageBackground,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const cardOne = require("../../assets/image/beer-slider.png");
const cardTwo = require("../../assets/image/news-block-1.png");
const cardThree = require("../../assets/image/news-detail-banner.png");
const cardFour = require("../../assets/image/tomats.png");
const cardFive = require("../../assets/image/events-banner.png");
const cardSix = require("../../assets/image/beer-slider.png");


const datas = [
  {
    img: cardOne,
    title: "Сидр в подарок при покупке 3х блюд",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 1,
  },
  {
    img: cardTwo,
		title: "Скидка 5% при покупке крылышек",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 2,
  },
  {
    img: cardThree,
		title: "Сидр в подарок при покупке 3х блюд",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 3,
  },
  {
    img: cardFour,
		title:  "Скидка 5% при покупке крылышек",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 4,
  },
  {
    img: cardFive,
		title: "Сидр в подарок при покупке 3х блюд",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 5,
  },
  {
    img: cardSix,
		title:  "Скидка 5% при покупке крылышек",
    note: "Рестора  Бетховин",
		dataNote: "до",
    data: "06.07",
		id: 6,
  },
];
// import { TMDB_IMG_URL } from '../../../constants/api';

const CardDiscount = () => (
datas.map((data, i) => (
	<TouchableOpacity style={styles.cardContainerLink} activeOpacity={0.8}  key={data.id}>
		<View style={styles.cardContainer}>
			<ImageBackground style={[styles.backgroundImage, {height: '100%', width: '100%'}]} source={data.img}>
						<Text style={styles.cardTitle} >{data.title}</Text>
						<Text style={styles.cardNote} >{data.note}</Text>
					<View style={styles.cardDataWrapper}>
						<Text style={styles.cardDataCaption}>{data.dataNote}</Text>
						<Text style={styles.cardData}>{data.data}</Text>
					</View>
			</ImageBackground>
		</View>
	</TouchableOpacity>
  ))
);

const styles = StyleSheet.create({
	cardContainerLink: {
		backgroundColor: '#171717',
		minHeight: 106,
		width: 250,
		elevation: 3,
		borderRadius: 4,
		overflow: 'hidden',
		marginHorizontal: 10,
	},
	backgroundImage: {
	justifyContent: 'flex-start',
	backgroundColor:'transparent',
	alignItems: 'flex-start',
	paddingVertical: 13,
	paddingHorizontal: 16,
},
cardDataWrapper: {
	flexDirection: 'row',
	alignItems: 'center',
},
cardTitle: {
	color: '#fdf8f8',
	maxWidth: '80%',
	fontSize: 15,
	fontWeight: '900',
},
cardNote: {
	color: '#fdf8f8',
	fontSize: 12,
	fontWeight: '400',
},
cardDataCaption: {
	color: '#fdf8f8',
	fontSize: 10,
	marginRight: 5,
	fontWeight: '900',
},
cardData: {
	color: '#fdf8f8',
	fontSize: 27,
	fontWeight: '900',
}
});
// CardDish.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default CardDiscount;
