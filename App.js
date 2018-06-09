import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CONTAINER from './src/styles/CONTAINER';
import NAVIGATION_OPTIONS from './src/styles/NAVIGATION_OPTIONS';
import HomeComponent from './src/modules/HomeComponent';
import AddWordsComponent from './src/modules/add-words-module/AddWordsComponent';
import UpdateWordComponent from './src/modules/add-words-module/UpdateWordComponent';
import ProgressComponent from './src/modules/see-progress-module/ProgressComponent';
import TrainingComponent from './src/modules/training-module/TrainingComponent';
import WordsListComponent from './src/modules/see-progress-module/WordsListComponent';
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
