import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

import ToggleTheme from '../components/ToggleTheme';

import TopCarousel from '../components/TopCarousel';
import MainSliderDish from '../components/MainSliderDish';
import MainSliderSchool from '../components/MainSliderSchool';
import MainSliderEvents from '../components/MainSliderEvents';
import MainSliderRestaurants from '../components/MainSliderRestaurants';
import MainSliderNews from '../components/MainSliderNews';
import MainSliderDiscount from '../components/MainSliderDiscount';
import MainSliderChildrens from '../components/MainSliderChildrens';
import CommunicationBlack from '../components/CommunicationBlack';
import {normalizedComments} from '../base/fixtures';

const window = Dimensions.get('window');

export default class Page1 extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
          <TopCarousel />
          <MainSliderRestaurants restInfo={normalizedComments} />
          <MainSliderSchool />
          <MainSliderDish />
          <MainSliderEvents />
          <MainSliderDiscount />
          <MainSliderNews />
          <MainSliderChildrens />
          <CommunicationBlack />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	mainContainer: {
    flex: 1,
		backgroundColor: '#232323',
		width: window.width,
	},
});
