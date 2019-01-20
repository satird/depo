import React, { Component } from 'react';
import { AppRegistry, Text, View  } from 'react-native';

class Blink extends Component {
 constructor(props) {
   super(props);
   this.state = { isShowingText: true };

   // Toggle the state every second
   setInterval(() => (
     this.setState(previousState => (
       { isShowingText: !previousState.isShowingText }
     ))
   ), 1000);
 }

 render() {
   if (!this.state.isShowingText) {
     return null;
   }

   return (
     <Text>{this.props.text}</Text>
   );
 }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
