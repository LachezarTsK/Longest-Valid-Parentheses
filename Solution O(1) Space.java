
public class Solution {

    public int longestValidParentheses(String input) {
        int maxFromForwardIteration = findMaxValidLength(input, '(', ')');
        int maxFromBackwardIetration = findMaxValidLength(input, ')', '(');
        return Math.max(maxFromForwardIteration, maxFromBackwardIetration);
    }

    private int findMaxValidLength(String input, char openingBracket, char closingBracket) {

        final int start = (openingBracket == '(') ? 0 : input.length() - 1;
        final int end = (start == 0) ? input.length() : -1;
        final int iteratorDirection = (start == 0) ? 1 : -1;

        int countOpening = 0;
        int countClosing = 0;
        int maxValidLength = 0;

        for (int i = start; i != end; i += iteratorDirection) {
            countOpening += (input.charAt(i) == openingBracket) ? 1 : 0;
            countClosing += (input.charAt(i) == closingBracket) ? 1 : 0;

            if (countOpening == countClosing) {
                maxValidLength = Math.max(maxValidLength, 2 * countClosing);
            }
            if (countOpening < countClosing) {
                countOpening = 0;
                countClosing = 0;
            }
        }
        return maxValidLength;
    }
}
