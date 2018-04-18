import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BUTTON from './src/styles/BUTTON';
import CONTAINER from './src/styles/CONTAINER';
import AddWordsComponent from './src/add-words-module/AddWords-component';
import ProgressComponent from './src/see-progress-module/ProgressComponent';
import TrainingComponent from './src/training-module/TrainingComponent';
import LearnedWordsComponent from './src/see-progress-module/LearnedWordsComponent';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER, CONTAINER.COLUMN),
    buttonContainer: BUTTON.CONTAINER,
    buttonText: BUTTON.TEXT,
    buttonTextGreen: Object.assign({}, BUTTON.TEXT, BUTTON.GREEN),
    buttonTextViolet: Object.assign({}, BUTTON.TEXT, BUTTON.VIOLET),
});

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

  render() {
      // app should be reloaded automatically on android device
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => { navigate('Trainings', { params: 'some params' }); }}
                            disabled={false}
                            accessibilityLabel="Move to training not learned words page"
                            testId={'move to train words state'}>
              <Text style={styles.buttonText}>
                  TRAIN WORDS
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => { navigate('AddWords', { params: 'some params' }); }}
                            disabled={false}
                            accessibilityLabel="Move to adding new words to DB page"
                            testId={'move to adding new words state'}>
              <Text style={styles.buttonTextGreen}>
                  ADD NEW WORDS
              </Text>
          </TouchableOpacity>
          <Button
              onPress={() => { navigate('Statistic', {}) }}
              title="See statistic"
              color={'purple'}
              accessibilityLabel="Move to learning statistic page"
          />
      </View>
    );
  }
}

const App = StackNavigator({
    Home: { screen: MainScreen },
    Trainings: { screen: TrainingComponent },
    Statistic: { screen: ProgressComponent },
    AddWords: { screen: AddWordsComponent },
    ListWordsComponent: { screen: LearnedWordsComponent }
});

export default App;
