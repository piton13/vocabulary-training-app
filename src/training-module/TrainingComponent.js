import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import GLOBALS from '../globalVariables';
import INPUT from '../styles/INPUT';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import learnWordsService from '../api/learnWordsHttpService';

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
        learnWordsService.getTrainingWords()
        .then((responseJson) => {
            this.setState({
                wordsToLearn: responseJson
            });
        });
    }

    handleTranslation = (word) => {
        this.setState({
            translationForCurrentWord: word
        });
    };

    checkAnswer = () => {
        const { currentWord } = this.props.navigation.state.params;

        learnWordsService.checkAnswer({
                _id: this.state.wordsToLearn[currentWord]._id,
                translation: this.state.translationForCurrentWord
            })
            .then((response) => {
            })
            .catch(() => {
            })
            .finally(() => {
                if (currentWord === this.state.wordsToLearn.length -1) {
                    return this.props.navigation.goBack();
                }
                this.props.navigation.setParams({
                    currentWord: currentWord + 1
                });
                this.setState({
                    translationForCurrentWord: ''
                });
            });
    };

    render() {
        const { params } = this.props.navigation.state;
        const word = this.state.wordsToLearn
            && this.state.wordsToLearn[params.currentWord]
            && this.state.wordsToLearn[params.currentWord].foreign;

        if (this.state.wordsToLearn === null) {
            return null;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {params.currentWord}. {word}
                </Text>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Translation for the word'
                           placeholderTextColor={GLOBALS.COLOR.BLUE}
                           autoCapitalize="none"
                           value={this.state.translationForCurrentWord}
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
