import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import GLOBALS from '../globalVariables';

export default class TrainingComponent extends React.Component {
    static navigationOptions = {
        title: 'Train your words',
    };

    state = {
        wordsToLearn: null,
        currentWord: 0,
        translationForCurrentWord: ''
    };

    componentDidMount() {
        fetch(`${GLOBALS.BASE_URL}/words`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                wordsToLearn: responseJson
            });
            alert(`it's json: ${responseJson[0].foreign} ${responseJson[0].translation}`);
        })
        .catch((error) => {
            alert(error);
        });
    }

    getCurrentWord() {
        // return this.state.wordsToLearn[this.state.currentWord];
        return 'abc';
    }

    handleTranslation = (word) => {
        this.setState({
            translationForCurrentWord: word
        });
    };

    checkAnswer = () => {
        alert(this.state.translationForCurrentWord);
    };

    render() {
        if (this.state.wordsToLearn === null) {
            return null;
        }
        return (
            <View>
                <Text>It's training component</Text>
                <TouchableOpacity
                    style = {styles.container}>
                    <Text style = {styles.text}>
                        {this.state.currentWord}. {this.getCurrentWord()}
                    </Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid='transparent'
                               placeholder='Translation for the word'
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               onChangeText={this.handleTranslation}/>

                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.checkAnswer}>
                        <Text style={styles.submitButtonText}> Check </Text>
                    </TouchableOpacity>
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
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
});