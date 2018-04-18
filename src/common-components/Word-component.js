import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

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
    }
});

export default class WordComponent extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}