import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import wordsService from '../../api/wordsHttpService';
import ActivityIndicatorComponent from '../../common-components/ActivityIndicatorComponent';

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

export default class WordsListComponent extends React.Component {
    static navigationOptions = {
        title: 'List of learned words',
    };

    state = {
        obtainedItems: null
    };

    componentDidMount() {
        const { learned } = this.props.navigation.state.params;

        wordsService.getWords(learned)
            .then((obtainedItems) => {
                this.setState({ obtainedItems });
            });
    }

    render() {
        const { navigate } = this.props.navigation;

        if (this.state.obtainedItems === null) {
            return <ActivityIndicatorComponent />;
        }

        return (
             <View>
                {
                    this.state.obtainedItems.map((wordObj) => (
                        <TouchableOpacity key={wordObj._id}
                                          style={styles.container}
                                          onPress={() => { navigate('UpdateWord', {wordObj}) }}
                        >
                            <Text style={styles.text}>
                               {wordObj.foreign}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}