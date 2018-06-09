import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import learnWordsService from '../api/learnWordsHttpService';
import ActivityIndicatorComponent from '../common-components/ActivityIndicatorComponent';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center'
    },
    text: {
        color: '#4f603c',
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default class ProgressComponent extends React.Component {
    static navigationOptions = {
        title: 'Your learned and not learned statistic',
    };

    state = { fetchedData: null };

    componentDidMount() {
        learnWordsService.getWordsStatistic()
            .then((responseJson) => {
                this.setState({
                    fetchedData: responseJson
                });
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.fetchedData === null) {
            return <ActivityIndicatorComponent />;
        }
        return (
            <View>
                <TouchableOpacity style={styles.container}
                                  onPress={() => { navigate('WordsList', { learned: true }); }}>
                    <Text style={styles.text}>
                        Learned words: {this.state.fetchedData.learned}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}
                                  onPress={() => { navigate('WordsList', { learned: false }); }}>
                    <Text style={styles.text}>
                        Not learned words: {this.state.fetchedData.notLearned}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}