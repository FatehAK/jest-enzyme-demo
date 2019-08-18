import { successReducer } from './index';

describe('successReducer', () => {
    test('if no action passed then return default initial state of `false`', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });

    test('returns state of true if `CORRECT_GUESS` is passed', () => {
        const newState = successReducer(undefined, { type: 'CORRECT_GUESS' });
        expect(newState).toBe(true);
    });
});
