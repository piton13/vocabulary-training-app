import SERVER_ENDPOINTS from './SERVER_ENDPOINTS';
import http from './httpWrapperService';

const getWords = (learnedFlag = false, config) => {
    return http.get(`${SERVER_ENDPOINTS.WORDS}?learned=${learnedFlag}`);
};

const saveWord = (data, config) => {
    return http.post(`${SERVER_ENDPOINTS.WORDS}`, data);
};

const updateWord = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.WORDS}`, data);
};

const wordsOperations = {
    getWords,
    saveWord,
    updateWord
};

export default wordsOperations;