import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CONTAINER from './src/styles/CONTAINER';
import NAVIGATION_OPTIONS from './src/styles/NAVIGATION_OPTIONS';
import HomeComponent from './src/modules/HomeComponent';
import AddWordsComponent from './src/add-words-module/AddWordsComponent';
import UpdateWordComponent from './src/add-words-module/UpdateWordComponent';
import ProgressComponent from './src/see-progress-module/ProgressComponent';
import TrainingComponent from './src/training-module/TrainingComponent';
import WordsListComponent from './src/see-progress-module/WordsListComponent';
import OfflineNoticeComponent from './src/common-components/OfflineNoticeComponent';
import ApiSynchronizationService from './src/services/ApiSynchronizationService';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER, {
        position: 'relative',
        padding: 0
    }),
});

const RootStack = StackNavigator({
    Home: { screen: HomeComponent },
    Trainings: { screen: TrainingComponent },
    Statistic: { screen: ProgressComponent },
    AddWords: { screen: AddWordsComponent },
    UpdateWord: { screen: UpdateWordComponent },
    WordsList: { screen: WordsListComponent }
}, {
    initialRouteName: 'Home',
    navigationOptions: NAVIGATION_OPTIONS.HEADER
});

export default class App extends React.Component {
    componentDidMount() {
        ApiSynchronizationService.fetchWordsToLearn();
    }

    render() {
        return (
            <View style={styles.container}>
                <OfflineNoticeComponent />
                <RootStack />
            </View>
        )
    }
};
