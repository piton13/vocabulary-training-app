import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
      // app should be reloaded automatically on android device
    return (
      <View style={styles.container}>
        <Text>Train not learned words</Text>
        <Text>Add new word to DB</Text>
        <Text>See learned and not learned words</Text>
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
