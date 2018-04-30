import sut from './wordsHttpService';

const mockGetResponse = [];
jest.mock('./httpWrapperService', () => {
    return {
        get: jest.fn(() => new Promise(resolve => resolve(mockGetResponse))),
        post: jest.fn(),
        patch: jest.fn()
    };
});

describe('get words method', () => {
    it('should obtain list of words from server', async () => {
        const result = await sut.getWords(true);
        expect(result.length).toEqual(mockGetResponse.length);
    });
});