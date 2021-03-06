import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import styles from './styles/SlideSchoolCard';

const cardOne = require("../../assets/image/we-slider-2.png");
const cardTwo = require("../../assets/image/we-slider-3.png");
const cardThree = require("../../assets/image/we-slider-4.png");
const cardFour = require("../../assets/image/we-slider-5.png");
const cardFive = require("../../assets/image/we-cooks-slide-5.png");
const cardSix = require("../../assets/image/we-cooks-slide-6.png");


const datas = [
  {
    img: cardOne,
    title: "Концерт группы Серебро",
    cooks: "",
    data: "06.07",
    id: 1,
  },
  {
    img: cardTwo,
    title: "Спектакль «Три сестры» в МХТ имени А. П. Чехова ",
    cooks: "",
    data: "13.07",
    id: 2,
  },
  {
    img: cardThree,
		title: "Концерт группы Серебро",
    cooks: "",
    data: "06.07",
    id: 3,
  },
  {
    img: cardFour,
		title: "Спектакль «Три сестры» в МХТ имени А. П. Чехова ",
    cooks: "",
    data: "13.07",
    id: 4,
  },
  {
    img: cardFive,
    title: "Летнее меню",
    cooks: "Сергей Лужников",
    data: "06.07",
    id: 5,
  },
  {
    img: cardSix,
		title: "Спектакль «Три сестры» в МХТ имени А. П. Чехова ",
    cooks: "",
    data: "13.07",
    id: 6,
  },
];
// import { TMDB_IMG_URL } from '../../../constants/api';

const CardEvent = () => (
datas.map((data, i) => (
	<TouchableOpacity style={styles.cardContainerLink} activeOpacity={0.8}  key={(data,id) => index}>
		<View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
			   <Image source={data.img} style={styles.cardImage} />
      </View>
			<View style={styles.cardContentContainer}>
				<Text style={styles.cardTitle} numberOfLines={3}>
					{data.title}
				</Text>
        <Text style={styles.cardCooks} numberOfLines={1}>
					{data.cooks}
				</Text>
        <Text style={styles.cardData} numberOfLines={1}>
					{data.data}
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

export default CardEvent;
