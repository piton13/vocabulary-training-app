import GLOBALS from '../globalVariables';
import MockAdapter from 'axios-mock-adapter';
import sut from './httpWrapperService';

const mock = new MockAdapter(sut);
// arguments for reply are (status, data, headers)
mock.onGet(`/words`).reply(200, [{ id: 1, translation: 'Some translation' }]);

describe('axios instance default configuration', () => {
    it('should transform response', async () => {
        const result = await sut.get('/words');
        expect(result.constructor.name).toEqual('Array');
        expect(result.length).toEqual(1);
    });

    it('should has default timeout', () => {
        expect(sut.defaults.timeout).toEqual(5000);
    });

    it('should has default base url', () => {
        expect(sut.defaults.baseURL).toEqual(GLOBALS.BASE_URL);
    });

    it('should has default headers', () => {
        expect(sut.defaults.headers['Accept']).toEqual('application/json');
        expect(sut.defaults.headers['Content-Type']).toEqual('application/json');
    });
});
