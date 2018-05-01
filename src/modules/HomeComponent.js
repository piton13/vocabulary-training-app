import React from 'react';
import BUTTON from '../styles/BUTTON';
import CONTAINER from '../styles/CONTAINER';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import OfflineNoticeComponent from '../common-components/OfflineNoticeComponent';

const styles = StyleSheet.create({
    container: Object.assign({}, CONTAINER.CONTAINER),
    buttonContainer: Object.assign({marginTop: 30}, BUTTON.CONTAINER),
    buttonTextBlue: Object.assign({}, BUTTON.TEXT, BUTTON.BLUE),
    buttonTextGreen: Object.assign({}, BUTTON.TEXT, BUTTON.GREEN),
    buttonTextPurple: Object.assign({}, BUTTON.TEXT, BUTTON.PURPLE),
});

export default class HomeComponent extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <OfflineNoticeComponent />

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('Trainings', {currentWord: 0});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to training not learned words page"
                                  testId={'move to train words state'}>
                    <Text style={styles.buttonTextBlue}>
                        TRAIN WORDS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('AddWords', {});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to adding new words to DB page"
                                  testId={'move to adding new words state'}>
                    <Text style={styles.buttonTextGreen}>
                        ADD NEW WORDS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => {
                                      navigate('Statistic', {});
                                  }}
                                  disabled={false}
                                  accessibilityLabel="Move to learning statistic page"
                                  testId={'move to learning statistic page'}>
                    <Text style={styles.buttonTextPurple}>
                        SEE STATISTIC
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}