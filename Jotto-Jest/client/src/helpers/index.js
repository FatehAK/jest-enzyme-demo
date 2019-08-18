//check if letters match and return count
export function getLetterMatchCount(guessedWord, secretWord) {
    const guessedWordSet = new Set(guessedWord.split(''));
    const secretWordSet = new Set(secretWord.split(''));
    return [...secretWordSet].filter((letter) => guessedWordSet.has(letter)).length;
};
