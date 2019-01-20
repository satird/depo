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
import SlideDishCard from './modulComponents/SlideRestCard';
import stylesH from './modulComponents/styles/MainSliderHead';


const MainSliderRest = ({ restInfo }) => {
	console.log({restInfo})
	const restItem = restInfo.map((item) => {
		const { id, ...itemProps } = item;
		return (
					<SlideDishCard {...itemProps }  key={id} />
		)
	});
		return (
		  <View style={styles.mainDishSlider}>
				<View style={stylesH.heading}>
		      <Text style={stylesH.headingLeft}>Рестораны</Text>
		      <TouchableOpacity style={stylesH.headingRight} onPress={() =>
						this.props.navigation.navigate('Friends')
					}>
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
					{restItem}
				</ScrollView>
					<View style={styles.sliderLowLine}></View>
		  </View>
  );
}
const styles = StyleSheet.create({

  mainDishSlider: {
    flex: 1,
  },
  dishSlider: {
    paddingBottom: 21,
		flexDirection: 'row',

  },
  sliderLowLine: {
    height: 1,
    marginTop: -1,
    marginHorizontal: '5%',
    backgroundColor: '#5a5a5a',
  }
})

export default MainSliderRest;
