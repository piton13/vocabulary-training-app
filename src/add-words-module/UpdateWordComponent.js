import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import SERVER_ENDPOINTS from '../api/SERVER_ENDPOINTS';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER, CONTAINER.JUSTIFY_START, CONTAINER.COLUMN),

    buttonContainer: BUTTON.CONTAINER,
    buttonText: BUTTON.TEXT,
    buttonTextViolet: Object.assign({}, BUTTON.TEXT, BUTTON.VIOLET),
    input: {
        marginTop: 15,
        marginBottom: 15,
        padding: 20,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default class UpdateWordComponent extends React.Component {
    static navigationOptions = {
        title: 'Edit current word',
    };

    state = {
        word: this.props.navigation.state.params.wordObj.foreign,
        translation: this.props.navigation.state.params.wordObj.translation
    };

    handleTranslation = (text) => {
        this.setState({
            translation: text
        });
    };

    updateWord = () => {
        fetch(`${GLOBALS.BASE_URL}${SERVER_ENDPOINTS.WORDS}`, {
            method: 'PATCH',
            body: JSON.stringify({
                _id: this.props.navigation.state.params.wordObj._id,
                translation: this.state.translation,
            })
        }).then(() => this.props.navigation.goBack())
            .catch((error) => {alert(`something went wrong: ${error}`)});
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           disabled={true}
                           underlineColorAndroid='transparent'
                           placeholder='Foreign word'
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           value={this.state.word}/>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Word translation'
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText={this.handleTranslation}
                           value={this.state.translation}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.updateWord()}
                                  disabled={!this.state.word || !this.state.translation}
                                  accessibilityLabel="Update word button"
                                  testId={'update word'}>
                    <Text style={styles.buttonTextViolet}> Update </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
