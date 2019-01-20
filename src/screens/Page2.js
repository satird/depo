import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text,Dimensions } from 'react-native';

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
import {normalizedComments, restInfo1, restInfo2, restInfo3, restInfo4, restInfo5, restInfo6, restInfo7, restInfo8} from '../base/fixtures';

const window = Dimensions.get('window');

export default class Page2 extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
          <TopCarousel />
          <MainSliderRestaurants restInfo={restInfo1} />
          <MainSliderRestaurants restInfo={restInfo2} />
          <MainSliderRestaurants restInfo={restInfo3} />
          <MainSliderRestaurants restInfo={restInfo4} />
          <MainSliderRestaurants restInfo={restInfo5} />
          <MainSliderRestaurants restInfo={restInfo6} />
          <MainSliderRestaurants restInfo={restInfo7} />
          <MainSliderRestaurants restInfo={restInfo8} />
          <CommunicationBlack />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	mainContainer: {
    flex: 1,
		backgroundColor: '#ffffff',
		width: window.width,
	},
});
