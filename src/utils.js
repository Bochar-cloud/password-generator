const UPPERCASE_LETTERS = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const LOWERCASE_LETTERS = 'qwertyuiopasdfghjklzxcvbnm';
const NUMBERS = '1234567890';
const SYMBOLS = '!#$%&./?@^_';

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min)
};

const getRandomLetter = (str) => str[getRandomInt(0, str.length - 1)];

export const generatePass = (lengthPass = 20, optionsPass) => {
    const {
        isUppercase,
        isLowercase,
        isNumbers,
        isSymbols
    } = optionsPass;

    let pass = '';

    for (let i = 0; i <= lengthPass; i++) {
        if (isUppercase) {
            pass += getRandomLetter(UPPERCASE_LETTERS);
        }

        if (isLowercase) {
            pass += getRandomLetter(LOWERCASE_LETTERS);
        }

        if (isNumbers) {
            pass += getRandomLetter(NUMBERS);
        }

        if (isSymbols) {
            pass += getRandomLetter(SYMBOLS);
        }
    }

    return pass.slice(0, lengthPass);
};