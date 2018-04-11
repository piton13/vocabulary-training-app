import React from 'react';
import { View, Text } from 'react-native';

export default class TrainingComponent extends React.Component {
    static navigationOptions = {
        title: 'Train your words',
    };
    render() {
        return (
            <View>
                <Text>It's training component</Text>
            </View>
        )
    }
}