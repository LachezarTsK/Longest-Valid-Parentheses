
#include <string>
using namespace std;

class Solution {
    
public:
    int longestValidParentheses(string input) {
        int maxFromForwardIteration = findMaxValidLength(input, '(', ')');
        int maxFromBackwardIetration = findMaxValidLength(input, ')', '(');
        return max(maxFromForwardIteration, maxFromBackwardIetration);
    }
    
private:
    int findMaxValidLength(const string& input, char openingBracket, char closingBracket) {

        const int start = (openingBracket == '(') ? 0 : input.length() - 1;
        const int end = (start == 0) ? input.length() : -1;
        const int iteratorDirection = (start == 0) ? 1 : -1;

        int countOpening = 0;
        int countClosing = 0;
        int maxValidLength = 0;

        for (int i = start; i != end; i += iteratorDirection) {
            countOpening += (input[i] == openingBracket) ? 1 : 0;
            countClosing += (input[i] == closingBracket) ? 1 : 0;

            if (countOpening == countClosing) {
                maxValidLength = max(maxValidLength, 2 * countClosing);
            }
            if (countOpening < countClosing) {
                countOpening = 0;
                countClosing = 0;
            }
        }
        return maxValidLength;
    }
};
