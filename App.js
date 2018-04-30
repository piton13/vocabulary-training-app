import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BUTTON from './src/styles/BUTTON';
import CONTAINER from './src/styles/CONTAINER';
import AddWordsComponent from './src/add-words-module/AddWordsComponent';
import UpdateWordComponent from './src/add-words-module/UpdateWordComponent';
import ProgressComponent from './src/see-progress-module/ProgressComponent';
import TrainingComponent from './src/training-module/TrainingComponent';
import WordsListComponent from './src/see-progress-module/WordsListComponent';
import OfflineNoticeComponent from './src/common-components/OfflineNoticeComponent';
import ApiSynchronizationService from './src/services/ApiSynchronizationService';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER),
    buttonContainer: Object.assign({marginTop: 30}, BUTTON.CONTAINER),
    buttonTextBlue: Object.assign({}, BUTTON.TEXT, BUTTON.BLUE),
    buttonTextGreen: Object.assign({}, BUTTON.TEXT, BUTTON.GREEN),
    buttonTextPurple: Object.assign({}, BUTTON.TEXT, BUTTON.PURPLE),
});

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    componentDidMount() {
        ApiSynchronizationService.fetchWordsToLearn();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <OfflineNoticeComponent />

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('Trainings', {currentWord: 0});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to training not learned words page"
                                  testId={'move to train words state'}>
                    <Text style={styles.buttonTextBlue}>
                        TRAIN WORDS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('AddWords', {});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to adding new words to DB page"
                                  testId={'move to adding new words state'}>
                    <Text style={styles.buttonTextGreen}>
                        ADD NEW WORDS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('Statistic', {});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to learning statistic page"
                                  testId={'move to learning statistic page'}>
                    <Text style={styles.buttonTextPurple}>
                        SEE STATISTIC
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const App = StackNavigator({
    Home: { screen: MainScreen },
    Trainings: { screen: TrainingComponent },
    Statistic: { screen: ProgressComponent },
    AddWords: { screen: AddWordsComponent },
    UpdateWord: { screen: UpdateWordComponent },
    WordsList: { screen: WordsListComponent },
    initialRouteName: 'Home'
});

export default App;
