import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';
import INPUT from '../styles/INPUT';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import ApiSynchronizationService from '../services/ApiSynchronizationService';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER),
    input: Object.assign({}, INPUT.COMMON, INPUT.GREEN),
    buttonContainer: BUTTON.CONTAINER,
    buttonText: Object.assign({}, BUTTON.TEXT, BUTTON.GREEN)
});

export default class AddWordsComponent extends React.Component {
    static navigationOptions = {
        title: 'Login page',
    };

    state = {
        login: '',
        password: ''
    };

    handleLogin = (login) => {
        this.setState({ login });
    };

    handlePassword = (password) => {
        this.setState({ password });
    };

    authorize = () => {
        ApiSynchronizationService.authorize({
            login: this.state.login,
            password: this.state.password,
        }).then(() => this.props.navigation.navigate('Home'));
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Login'
                           placeholderTextColor={GLOBALS.COLOR.GREEN}
                           autoCapitalize = "none"
                           onChangeText={this.handleLogin}/>

                <TextInput style={styles.input}
                           underlineColorAndroid='transparent'
                           placeholder='Password'
                           placeholderTextColor={GLOBALS.COLOR.GREEN}
                           autoCapitalize = "none"
                           onChangeText={this.handlePassword}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.authorize()}
                                  disabled={!this.state.login || !this.state.password}
                                  accessibilityLabel="Authorize"
                                  testId={'authorize button'}>
                    <Text style={styles.buttonText}>Authorize</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
