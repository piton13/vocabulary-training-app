import { AsyncStorage } from 'react-native';

const AsyncStorageService = {
    storeWordsToTrain(wordsList) {
        return AsyncStorage.setItem('wordsToTrain', JSON.stringify(wordsList))
            .catch(error => {
                alert(JSON.stringify(error));
            });

    },
    getWordsToTrain() {
        return AsyncStorage.getItem('wordsToTrain').then(items => {
            return JSON.parse(items);
        });
    },
    storeTrainedWord(word) {
        return AsyncStorage.getItem('trainedWords')
            .then((data) => {
                let str = data.slice(0, -1) + JSON.stringify(word) + ']';
                return AsyncStorage.setItem('trainedWords', str)
            })
            .catch(() => {
                AsyncStorage.setItem('trainedWords', JSON.stringify(word))
            });
    },
    storeAddedWord(word) {
        return AsyncStorage.getItem('newWords')
            .then((data) => {
                let str = data.slice(0, -1) + JSON.stringify(word) + ']';
                return AsyncStorage.setItem('newWords', str)
            })
            .catch(() => {
                AsyncStorage.setItem('newWords', JSON.stringify(word))
            });
    }
};

export default AsyncStorageService;
