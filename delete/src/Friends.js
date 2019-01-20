import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Add friends here!</Text>
          <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        <Button
        title="MAIN"
        onPress={() =>
          this.props.navigation.navigate('Main')
        }
      />
      <Button
      title="Rest"
      onPress={() =>
        this.props.navigation.navigate('Rest')
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
