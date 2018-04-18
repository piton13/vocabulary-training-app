import React from 'react';
import { View } from 'react-native';
import GLOBALS from '../globalVariables';
import WordComponent from "../common-components/Word-component";

export default class LearnedWordsComponent extends React.Component {
    static navigationOptions = {
        title: 'List of learned words',
    };

    state = {
        obtainedItems: null
    };

    // should be list of items with preload from server on demand

    componentDidMount() {
        fetch(`${GLOBALS.BASE_URL}/words?learned=true`, {
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
        if (this.state.obtainedItems === null) {
            return null;
        }
        return (
            <View>
                {
                    this.state.obtainedItems.map((wordObj) => (
                        <WordComponent key={wordObj._id} title={wordObj.foreign}/>
                    ))
                }
            </View>
        )
    }
}