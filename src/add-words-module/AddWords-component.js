import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';

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
            <View>
                <Text>It's add new words functionality</Text>
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

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.saveWord()
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
