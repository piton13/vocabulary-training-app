import NetInfoService from './NetInfoService';
import AsyncStorageService from './AsyncStorageService';
import wordsService from '../api/wordsHttpService';
import learnWordsService from '../api/learnWordsHttpService';

const ApiSynchronizationService = {
    fetchWordsToLearn() {
        return NetInfoService.isInternetAvailable().then(() => {
            return wordsService.getWords()
                .then(words => AsyncStorageService.storeWordsToTrain(words));
        });
    },
    getWordsToTrain() {
        return new Promise((resolve, reject) => {
            NetInfoService.isInternetAvailable()
                .then(() => {
                    alert('fetch data from server');
                    return learnWordsService.getTrainingWords()
                        .then(words => resolve(words))
                        .catch(() => getWordsFromStorage());
                })
                .catch(() => getWordsFromStorage());

            function getWordsFromStorage() {
                alert('fetch data from storage');
                AsyncStorageService.getWordsToTrain()
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            }
        });
    },
    checkTrainedWord(wordObj) {
        return new Promise((resolve, reject) => {
            NetInfoService.isInternetAvailable()
                .then(() => {
                    alert('check word on server');
                    learnWordsService.checkAnswer(wordObj)
                        .then(() => resolve())
                        .catch(() => reject());
                })
                .catch(() => {
                    alert('check word in storage');
                    AsyncStorageService.storeTrainedWord(wordObj)
                        .then(() => resolve())
                        .catch(() => reject());
                });
        });
    },
    addNewWord(wordObj) {
        return new Promise((resolve, reject) => {
            NetInfoService.isInternetAvailable()
                .then(() => {
                    alert('store to server');
                    wordsService.saveWord(wordObj)
                        .then(() => resolve())
                        .catch(() => reject());
                })
                .catch(() => {
                    alert('store to storage');
                    AsyncStorageService.storeAddedWord(wordObj)
                        .then(() => resolve())
                        .catch(() => reject());
                });
        });
    },
    storeAddedWords() {
        return AsyncStorageService.getAddedWords()
            .then((words) => wordsService.saveAddedWords(words));
    },
    storeLearnedWords() {
        return AsyncStorageService.getTrainedWords()
            .then((words) => wordsService.updateTrainedWords(words));
    }
};

export default ApiSynchronizationService;