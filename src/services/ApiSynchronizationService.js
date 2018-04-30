import wordsService from '../api/wordsHttpService';
import NetInfoService from './NetInfoService';
import AsyncStorageService from './AsyncStorageService';

const ApiSynchronizationService = {
    fetchWordsToLearn() {
        return NetInfoService.isInternetAvailable().then(() => {
            return wordsService.getWords()
                .then(words => AsyncStorageService.storeWordsToTrain(words));
        });
    }
};

export default ApiSynchronizationService;