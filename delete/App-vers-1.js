
import React, { Component } from 'react';
import {Container, Content} from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {MODES} from './constants';

import AssetExample from './components/AssetExample';
import LotsOfGreetings from './components/LotsOfGreetings';
import AppFooter from './components/AppFooter.js';

const initialState = {
	mode: MODES.ARTICLES
};
const store = createStore(reducers, initialState);



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.instructions}>To get started, edit App.js</Text>
              <Text style={styles.instructions}>{instructions}</Text>
              <View>
                <AssetExample />
                <LotsOfGreetings />
              </View>
            </View>
          </Content>
  		    <AppFooterContainer/>
        </Container>
	     </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
