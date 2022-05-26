
#include <stack>
#include <string>
using namespace std;

class Solution {
    
public:
    int longestValidParentheses(string input) {
        stack<int> stackIndexes;
        int sentinel = -1;
        stackIndexes.push(sentinel);
        int maxValidLength = 0;

        for (int i = 0; i < input.size(); ++i) {
            if (input[i] == '(') {
                stackIndexes.push(i);
                continue;
            }
            stackIndexes.pop();
            if (stackIndexes.empty()) {
                stackIndexes.push(i);
                continue;
            }
            maxValidLength = max(maxValidLength, i - stackIndexes.top());
        }
        return maxValidLength;
    }
};
