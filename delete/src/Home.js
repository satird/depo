import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <View style={styles.container}>
          <Text>We have many friends!</Text>
          <Button
            title="Add some friends"
            onPress={() =>
              this.props.navigation.navigate('Friends')
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});