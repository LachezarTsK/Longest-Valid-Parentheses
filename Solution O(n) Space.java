
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    public int longestValidParentheses(String input) {
        Deque<Integer> stackIndexes = new ArrayDeque<>();
        final int sentinel = -1;
        stackIndexes.push(sentinel);
        int maxValidLength = 0;

        for (int i = 0; i < input.length(); ++i) {
            if (input.charAt(i) == '(') {
                stackIndexes.push(i);
                continue;
            }
            stackIndexes.pop();
            if (stackIndexes.isEmpty()) {
                stackIndexes.push(i);
                continue;
            }
            maxValidLength = Math.max(maxValidLength, i - stackIndexes.peek());
        }
        return maxValidLength;
    }
}
