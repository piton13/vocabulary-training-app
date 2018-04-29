import SERVER_ENDPOINTS from './SERVER_ENDPOINTS';
import http from './httpWrapperService';

const getWords = (learnedFlag, config) => {
    return http.get(`${SERVER_ENDPOINTS.WORDS}?learned=${learnedFlag}`)
        .then(({data}) => data)
        .catch((error) => {
            alert(error);
        });
};

const saveWord = (data, config) => {
    return http.post(`${SERVER_ENDPOINTS.WORDS}`, data)
        .catch((error) => {alert(`something went wrong: ${error}`)});
};

const updateWord = (data, config) => {
    return http.patch(`${SERVER_ENDPOINTS.WORDS}`, data)
        .catch((error) => {alert(`something went wrong: ${error}`)});
};

const wordsOperations = {
    getWords,
    saveWord,
    updateWord
};

export default wordsOperations;