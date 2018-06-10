import SERVER_ENDPOINTS from './SERVER_ENDPOINTS';
import http from './httpWrapperService';

const authorize = (data, config) => {
    return http.post(`${SERVER_ENDPOINTS.LOGIN}`, data);
};

const getWords = (learnedFlag = false, config) => {
    return http.get(`${SERVER_ENDPOINTS.WORDS}?learned=${learnedFlag}`);
};

const saveWord = (data, config) => {
    return http.post(`${SERVER_ENDPOINTS.WORDS}`, data);
};

const updateWord = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.WORDS}`, data);
};

const saveAddedWords = (data, config) => {
    return http.post(`${SERVER_ENDPOINTS.SYNCHRONIZE_WORDS}`, data);
};

const updateTrainedWords = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.SYNCHRONIZE_WORDS}`, data);
};

const wordsOperations = {
    authorize,
    getWords,
    saveWord,
    updateWord,
    saveAddedWords,
    updateTrainedWords
};

export default wordsOperations;