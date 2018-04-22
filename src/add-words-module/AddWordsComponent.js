import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';
import INPUT from '../styles/INPUT';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import SERVER_ENDPOINTS from '../api/SERVER_ENDPOINTS';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER),
    input: Object.assign({}, INPUT.COMMON, INPUT.GREEN),
    buttonContainer: BUTTON.CONTAINER,
    buttonText: Object.assign({}, BUTTON.TEXT, BUTTON.GREEN)
});

export default class AddWordsComponent extends React.Component {
    static navigationOptions = {
        title: 'Add new words to learn',
    };

    state = {
        word: '',
        translation: ''
    };

    handleWord = (text) => {
        this.setState({
            word: text
        });
    };
    handleTranslation = (text) => {
        this.setState({
            translation: text
        });
    };
    saveWord = () => {
        fetch(`${GLOBALS.BASE_URL}${SERVER_ENDPOINTS.WORDS}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                foreign: this.state.word,
                translation: this.state.translation,
            })
        }).then(() => this.props.navigation.goBack())
          .catch((error) => {alert(`something went wrong: ${error}`)});
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Foreign word'
                           placeholderTextColor={GLOBALS.COLOR.GREEN}
                           autoCapitalize = "none"
                           onChangeText={this.handleWord}/>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Word translation'
                           placeholderTextColor={GLOBALS.COLOR.GREEN}
                           autoCapitalize = "none"
                           onChangeText={this.handleTranslation}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.saveWord()}
                                  disabled={!this.state.word || !this.state.translation}
                                  accessibilityLabel="Add new word button"
                                  testId={'add new word'}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
