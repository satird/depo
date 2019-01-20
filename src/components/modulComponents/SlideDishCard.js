import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import styles from './styles/SlideDishCard';

const cardOne = require("../../assets/image/markets-block.png");
const cardTwo = require("../../assets/image/news-block-1.png");
const cardThree = require("../../assets/image/news-detail-banner.png");
const cardFour = require("../../assets/image/tomats.png");
const cardFive = require("../../assets/image/events-banner.png");
const cardSix = require("../../assets/image/beer-slider.png");


const datas = [
  {
    img: cardOne,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 1,
  },
  {
    img: cardTwo,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 2,
  },
  {
    img: cardThree,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 3,
  },
  {
    img: cardFour,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 4,
  },
  {
    img: cardFive,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 5,
  },
  {
    img: cardSix,
    title: "Томатокс",
    note: "помидоры, огурцы, зелень",
    address: "Павильон 23",
		id: 6,
  },
];
// import { TMDB_IMG_URL } from '../../../constants/api';

const CardDish = () => (
datas.map((data, id) => (
	<TouchableOpacity style={styles.cardContainerLink} activeOpacity={0.8}  key={data.id}>
		<View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
			   <Image source={data.img} style={styles.cardImage} />
      </View>
			<View style={styles.cardContentContainer}>
				<Text style={styles.cardTitle} numberOfLines={1}>
					{data.title}
				</Text>
        <Text style={styles.cardNote} numberOfLines={1}>
					{data.note}
				</Text>
        <Text style={styles.cardAddress} numberOfLines={1}>
					{data.address}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
  ))
);

// CardDish.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default CardDish;
