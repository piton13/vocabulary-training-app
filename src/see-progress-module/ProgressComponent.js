import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import GLOBALS from '../globalVariables';

export default class ProgressComponent extends React.Component {
    static navigationOptions = {
        title: 'Your learned and not learned statistic',
    };

    state = { fetchedData: null };

    componentDidMount() {
        fetch(`${GLOBALS.BASE_URL}/words/statistic`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                fetchedData: responseJson
            });
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.fetchedData === null) {
            return null;
        }
        return (
            <View>
                <TouchableOpacity style={styles.container}
                                  onPress={() => { navigate('ListWordsComponent', { learned: true }); }}>
                    <Text style={styles.text}>
                        Learned words: {this.state.fetchedData.learned}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}
                                  onPress={() => { navigate('ListWordsComponent', { learned: false }); }}>
                    <Text style={styles.text}>
                        Not learned words: {this.state.fetchedData.notLearned}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

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