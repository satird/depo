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
import SlideChildrensCard from './modulComponents/SlideChildrensCard';
import stylesH from './modulComponents/styles/MainSliderHead';


export default class MainSliderChildrens extends Component {
	render() {
		return (
		  <View style={styles.mainDishSlider}>
				<View style={stylesH.heading}>
		      <Text style={stylesH.headingLeft}>Детям</Text>
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
							<SlideChildrensCard />
					</ScrollView>
		  </View>
  );
}
}
const styles = StyleSheet.create({

  mainDishSlider: {
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
