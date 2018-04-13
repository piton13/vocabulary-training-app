import React from 'react';
import { View, Text } from 'react-native';
import GLOBALS from '../globalVariables';

export default class TrainingComponent extends React.Component {
    static navigationOptions = {
        title: 'Train your words',
    };
    componentDidMount() {
        fetch(`${GLOBALS.BASE_URL}/users`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            alert(`it's json: ${responseJson[0].name} ${responseJson[0].age}`);
            /*this.setState({
                data: responseJson
            })*/
        })
        .catch((error) => {
            alert(error);
        });
    }
    render() {
        return (
            <View>
                <Text>It's training component</Text>
            </View>
        )
    }
}