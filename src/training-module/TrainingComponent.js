import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import GLOBALS from '../globalVariables';
import INPUT from '../styles/INPUT';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import SERVER_ENDPOINTS from '../api/SERVER_ENDPOINTS';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER),
    text: {
        color: GLOBALS.COLOR.BLUE,
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: Object.assign({}, INPUT.COMMON, INPUT.BLUE),
    buttonContainer: BUTTON.CONTAINER,
    buttonText: Object.assign({}, BUTTON.TEXT, BUTTON.BLUE)
});

export default class TrainingComponent extends React.Component {
    static navigationOptions = {
        title: 'Train your words',
    };

    state = {
        wordsToLearn: null,
        translationForCurrentWord: ''
    };

    componentDidMount() {
        fetch(`${GLOBALS.BASE_URL}${SERVER_ENDPOINTS.LEARN_WORDS}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                wordsToLearn: responseJson
            });
        })
        .catch((error) => {
            alert(error);
        });
    }

    handleTranslation = (word) => {
        this.setState({
            translationForCurrentWord: word
        });
    };

    checkAnswer = () => {
        if (this.props.navigation.state.params.currentWord === this.state.wordsToLearn.length - 1) {
            return this.props.navigation.goBack();
        }


        fetch(`${GLOBALS.BASE_URL}${SERVER_ENDPOINTS.LEARN_WORDS}`, {
            method: 'PATCH'
        })
            .then(() => {
                alert('answer was correct');
            })
            .catch(() => {
                alert('answer was not correct');
            })
            .finally(() => {
                this.props.navigation.setParams({currentWord: ++this.props.navigation.state.params.currentWord});
            });
    };

    render() {
        const { params } = this.props.navigation.state;

        if (this.state.wordsToLearn === null) {
            return null;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {params.currentWord}. {this.state.wordsToLearn[params.currentWord].foreign}
                </Text>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Translation for the word'
                           placeholderTextColor={GLOBALS.COLOR.BLUE}
                           autoCapitalize="none"
                           onChangeText={this.handleTranslation}/>

                <TouchableOpacity
                    style = {styles.buttonContainer}
                    onPress = {this.checkAnswer}
                    accessibilityLabel="Check answer"
                    testId={'check answer'}>
                    <Text style={styles.buttonText}> Check answer </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
