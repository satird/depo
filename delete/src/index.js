
import React, { Component } from 'react';
import {Container, View, Content} from 'native-base';
import {Platform, StyleSheet, Text,  Image,  Dimensions} from 'react-native';

import {createStore} from 'redux';
import reducers from '../reducers';
import {Provider} from 'react-redux';
import {MODES} from '../constants';
import AppFooterContainer from '../containers/AppFooterContainer.js';

import TopCarousel from '../components/AssetExample';
import LotsOfGreetings from '../components/LotsOfGreetings';
import TopText from '../components/TopText';
import MainSliderDish from '../components/MainSliderDish';
import MainSliderSchool from '../components/MainSliderSchool';
import MainSliderEvents from '../components/MainSliderEvents';
import MainSliderRestaurants from '../components/MainSliderRestaurants';
import MainSliderNews from '../components/MainSliderNews';
import MainSliderDiscount from '../components/MainSliderDiscount';
import MainSliderChildrens from '../components/MainSliderChildrens';
import CommunicationBlack from '../components/CommunicationBlack';
// import AppFooter from './components/AppFooter.js';

const initialState = {
	mode: MODES.ARTICLES
};
const store = createStore(reducers, initialState);
const window = Dimensions.get('window');

// type Props = {};
// const App = () =>  (
	export default class App extends React.Component {
	  static navigationOptions = {
	    header: null,
	    };
	  render() {
	    return (
      <Provider store={store}>
        <Container style={styles.mainContainer}>
          <Content>
							<View style={styles.container}>
                <TopCarousel />
                <MainSliderRestaurants />
                <MainSliderSchool />
                <MainSliderDish />
                <MainSliderEvents />
                <MainSliderDiscount />
                <MainSliderNews />
								<MainSliderChildrens />
                <CommunicationBlack />
              </View>
          </Content>
  		    <AppFooterContainer />
        </Container>
	     </Provider>
		 );
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#232323',
		height: null,
		width: window.width,
		justifyContent: 'flex-start'
	},
  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// export default App;
