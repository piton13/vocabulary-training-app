import NetInfoService from '../services/NetInfoService';
import learnWordsService from '../api/learnWordsHttpService';
import AsyncStorageService from '../services/AsyncStorageService';

const TrainingService = {
    getWordsForTraining() {
        if (NetInfoService.isInternetAvailable()) {
            return learnWordsService.getTrainingWords();
        } else {
            return AsyncStorageService.getWordsToTraining();
        }
    }
};

export default TrainingService;