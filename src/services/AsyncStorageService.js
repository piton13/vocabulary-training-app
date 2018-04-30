import { AsyncStorage } from 'react-native';

const AsyncStorageService = {
    storeWordsToTrain(wordsList) {
        return AsyncStorage.setItem('wordsToTrain', JSON.stringify(wordsList))
            .catch(error => {
                alert(JSON.stringify(error));
            });

    },
    getWordsToTraining() {
        return AsyncStorage.getItem('wordsToTrain').then(items => {
            return JSON.parse(items);
        });
    }
};

export default AsyncStorageService;
