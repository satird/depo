import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image} from 'react-native';
import {Footer, FooterTab, Button, Text, Icon,  StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import {MODES} from "../constants";
import PropTypes from 'prop-types';
// import calendar from '../assets/image/calendar.png';
// import food from '../assets/image/food.png';
// import shoppingBasket from '../assets/image/shoppingBasket.png';
// import pinPaper from '../assets/image/pinPaper.png';
// import user from '../assets/image/user.png';
import Depo from '../native-base-theme/variables/depo';

const AppFooter = ({mode = MODES.ARTICLES, setMode = () => {}}) => (
	<StyleProvider style={getTheme(Depo)}>
	<Footer style={styles.footer}>
		<FooterTab style={styles.footerTab}>
			<Button vertical style={styles.button} active={mode === MODES.ARTICLES} onPress={() => setMode(MODES.ARTICLES)}>
				<Icon name="ios-calendar" />
				<Text style={styles.buttonText}>Lifestyle</Text>
			</Button>
			<Button vertical style={styles.button} active={mode === MODES.RESTORAN} onPress={() => setMode(MODES.RESTORAN)}>
        <Icon name="md-restaurant" />
				<Text style={styles.buttonText}>Рестораны</Text>
			</Button>
			<Button vertical style={styles.button} active={mode === MODES.MARKET} onPress={() => setMode(MODES.MARKET)}>
        <Icon name="md-basket" />
				<Text style={styles.buttonText}>Рынок</Text>
			</Button>
			<Button vertical style={styles.button} active={mode === MODES.LOCATION} onPress={() => setMode(MODES.LOCATION)}>
        <Icon name="md-map" />
				<Text style={styles.buttonText}>Схема</Text>
			</Button>
			<Button vertical style={styles.button} active={mode === MODES.USERLK} onPress={() => setMode(MODES.USERLK)}>
        <Icon name="ios-contact" />
				<Text style={styles.buttonText}>Аккаунт</Text>
			</Button>
		</FooterTab>
	</Footer>
	</StyleProvider>
);
// Button.defaultProps = {
//   backgroundColor: '#171717',
// };
const styles = StyleSheet.create({
  button: {
  },
  image: {
    height: 30,
    width: 30,
  },
  footerTab: {
    backgroundColor: '#171717',
  },
  footer: {
  },
});

AppFooter.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};
export default AppFooter;
