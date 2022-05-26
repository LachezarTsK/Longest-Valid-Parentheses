
/**
 * @param {string} input
 * @return {number}
 */
var longestValidParentheses = function (input) {
    const stackIndexes = [];
    const sentinel = -1;
    stackIndexes.push(sentinel);
    let maxValidLength = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input.charAt(i) === '(') {
            stackIndexes.push(i);
            continue;
        }
        stackIndexes.pop();
        if (stackIndexes.length === 0) {
            stackIndexes.push(i);
            continue;
        }
        maxValidLength = Math.max(maxValidLength, i - stackIndexes[stackIndexes.length - 1]);
    }
    return maxValidLength;
};
