import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';
import CONTAINER from '../styles/CONTAINER';
import BUTTON from '../styles/BUTTON';

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

export default class AddWordsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            translation: ''
        };
    }

    static navigationOptions = {
        title: 'Add new words to learn',
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
        fetch(`${GLOBALS.BASE_URL}/words`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                foreign: this.state.word,
                translation: this.state.translation,
            })
        }).then(respose => respose.json())
            .then((response) => {
                alert(JSON.stringify(response));
                const { navigate } = this.props.navigation;
                navigate('Home', {});
        }).catch((error) => {alert(`something went wrong: ${error}`)});
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Foreign word'
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText={this.handleWord}/>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Word translation'
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText={this.handleTranslation}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.saveWord()}
                                  accessibilityLabel="Add new word button"
                                  testId={'add new word'}>
                    <Text style={styles.buttonTextViolet}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
