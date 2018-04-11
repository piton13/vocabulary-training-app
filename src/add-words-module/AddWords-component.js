import React from 'react';
import { View, Text } from 'react-native';

export default class AddWordsComponent extends React.Component {
    static navigationOptions = {
        title: 'Add new words to learn',
    };
    render() {
        return (
            <View>
                <Text>It's add new words functionality</Text>
            </View>
        )
    }
}
