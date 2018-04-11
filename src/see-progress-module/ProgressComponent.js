import React from 'react';
import { View, Text } from 'react-native';

export default class ProgressComponent extends React.Component {
    static navigationOptions = {
        title: 'Your learned and not learned statistic',
    };
    render() {
        return (
            <View>
                <Text>It's progress component</Text>
            </View>
        )
    }
}