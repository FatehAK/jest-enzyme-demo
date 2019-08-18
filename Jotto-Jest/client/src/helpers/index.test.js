import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('return correct count when there are no matching letters', () => {
        const matchCount = getLetterMatchCount('noon', secretWord);
        expect(matchCount).toBe(0);
    });
    test('return correct count when there are 3 matching letters', () => {
        const matchCount = getLetterMatchCount('reap', secretWord);
        expect(matchCount).toBe(3);
    });
    test('return correct count discarding duplicate matching letters', () => {
        const matchCount = getLetterMatchCount('parka', secretWord);
        expect(matchCount).toBe(3);
    });
});
