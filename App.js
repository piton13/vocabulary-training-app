import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddWordsComponent from './src/add-words-module/AddWords-component';
import ProgressComponent from './src/see-progress-module/ProgressComponent';
import TrainingComponent from './src/training-module/TrainingComponent';

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    onPressLearnMore() {
        alert('button is pressed');
    }
  render() {
      // app should be reloaded automatically on android device
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Button
              onPress={() => { navigate('Trainings', { params: 'some params' }); }}
              title="Train words"
              color="#363584"
              disabled={false}
              testId={'move to train words state'}
              accessibilityLabel="Move to training not learned words page"
          />
          <Button
              onPress={this.onPressLearnMore.bind(this)}
              title="Add new words"
              color="#363584"
              disabled={false}
              accessibilityLabel="Move to adding new words to DB page"
          />
          <Button
              onPress={this.onPressLearnMore.bind(this)}
              title="See statistic"
              color="#363584"
              disabled={true}
              accessibilityLabel="Move to learning statistic page"
          />
          <AddWordsComponent/>
          <ProgressComponent/>
          <TrainingComponent/>
      </View>
    );
  }
}

const App = StackNavigator({
    Home: { screen: MainScreen },
    Trainings: { screen: TrainingComponent },
    Statistic: { screen: ProgressComponent },
    AddWords: { screen: AddWordsComponent }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
