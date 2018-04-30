import SERVER_ENDPOINTS from './SERVER_ENDPOINTS';
import http from './httpWrapperService';

const getTrainingWords = (config) => {
    return http.get(`${SERVER_ENDPOINTS.LEARN_WORDS}`);
};

const checkAnswer = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.LEARN_WORDS}`, data);
};

const getWordsStatistic = (config) => {
    return http.get(`${SERVER_ENDPOINTS.WORDS_STATISTIC}`);
};

const learnWordsOperations = {
    getWordsStatistic,
    getTrainingWords,
    checkAnswer
};

export default learnWordsOperations;