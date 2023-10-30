import { execute} from '../../src/services/dummy-service.js';
import { helper } from '../../src/services/helper-service.js';

jest.mock('../../src/services/helper-service.js');


test('result is true and returns Learning Testing', () => {
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning Testing');

});


test('result is false and returns Learning Testing Failed', () => {

    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning Testing Failed');
});
