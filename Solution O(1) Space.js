
/**
 * @param {string} input
 * @return {number}
 */
var longestValidParentheses = function (input) {
    let maxFromForwardIteration = findMaxValidLength(input, '(', ')');
    let maxFromBackwardIetration = findMaxValidLength(input, ')', '(');
    return Math.max(maxFromForwardIteration, maxFromBackwardIetration);
};

/**
 * @param {string} input
 * @param {character} openingBracket
 * @param {character} closingBracket
 * @return {number}
 */
function  findMaxValidLength(input, openingBracket, closingBracket) {

    const start = (openingBracket === '(') ? 0 : input.length - 1;
    const end = (start === 0) ? input.length : -1;
    const iteratorDirection = (start === 0) ? 1 : -1;

    let countOpening = 0;
    let countClosing = 0;
    let maxValidLength = 0;

    for (let i = start; i !== end; i += iteratorDirection) {
        countOpening += (input.charAt(i) === openingBracket) ? 1 : 0;
        countClosing += (input.charAt(i) === closingBracket) ? 1 : 0;

        if (countOpening === countClosing) {
            maxValidLength = Math.max(maxValidLength, 2 * countClosing);
        }
        if (countOpening < countClosing) {
            countOpening = 0;
            countClosing = 0;
        }
    }
    return maxValidLength;
}
