import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import GLOBALS from '../globalVariables';
import SERVER_ENDPOINTS from '../api/SERVER_ENDPOINTS';

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
        fetch(`${GLOBALS.BASE_URL}${SERVER_ENDPOINTS.WORDS}?learned=${learned}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    obtainedItems: responseJson
                });
            })
            .catch((error) => {
                alert(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;

        if (this.state.obtainedItems === null) {
            return null;
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