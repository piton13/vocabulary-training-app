import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import GLOBALS from '../globalVariables';

const activityIndicatorSize = 75;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {}
});

class ActivityIndicatorComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={activityIndicatorSize} color={GLOBALS.COLOR.GREEN} />
            </View>
        )
    }
}

export default ActivityIndicatorComponent;