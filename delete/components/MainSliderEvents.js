import React, { PropTypes, Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	RefreshControl,
	Text,
	TouchableOpacity,
	View,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SlideEventsCard from './modulComponents/SlideEventsCard';
import stylesH from './modulComponents/styles/MainSliderHead';


export default class MainSliderEvents extends Component {
	render() {
		return (
		  <View style={styles.mainSchoolSlider}>
				<View style={stylesH.heading}>
		      <Text style={stylesH.headingLeft}>Мероприятия</Text>
		      <TouchableOpacity style={stylesH.headingRight}>
		        <Text  style={stylesH.headingRightText}
		          >
		          См. все
		        </Text>
						<Icon  style={stylesH.headingRightIcon} name="ios-arrow-forward" />
		      </TouchableOpacity>
		    </View>
				<ScrollView style={styles.dishSlider}
					horizontal
					showsHorizontalScrollIndicator={true}
					indicatorStyle={'white'}>
							<SlideEventsCard />
					</ScrollView>
					<View style={styles.sliderLowLine}></View>
		  </View>
  );
}
}

const styles = StyleSheet.create({

  mainSchoolSlider: {
    flex: 1,
  },
  dishSlider: {
    paddingBottom: 21,
  },
  sliderLowLine: {
    height: 1,
    marginTop: -1,
    marginHorizontal: '5%',
    backgroundColor: '#5a5a5a',
  }
})
