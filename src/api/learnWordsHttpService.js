import SERVER_ENDPOINTS from './SERVER_ENDPOINTS';
import http from './httpWrapperService';

const getTrainingWords = (config) => {
    return http.get(`${SERVER_ENDPOINTS.LEARN_WORDS}`)
        .then(({data}) => data)
        .catch((error) => {
            alert(error);
        });
};

const checkAnswer = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.LEARN_WORDS}`, data)
        .catch((error) => {alert(`something went wrong: ${error}`)});
};

const getWordsStatistic = (config) => {
    return http.get(`${SERVER_ENDPOINTS.WORDS_STATISTIC}`)
        .then(({data}) => data)
        .catch((error) => {
            alert(error);
        });
};

const learnWordsOperations = {
    getWordsStatistic,
    getTrainingWords,
    checkAnswer
};

export default learnWordsOperations;