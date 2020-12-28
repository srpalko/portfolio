
function palindromeChecker(string) {
    /**
     * checks a string to see if it is a palindrome and returns true or false. Ignores spaces, case, and 
     * non-alphanumeric characters.
     */
    let lowercaseString = string.toLowerCase();
    let stringLength = lowercaseString.length;
    let frontCursor = 0, backCursor = stringLength - 1;
    while (frontCursor < backCursor) {
        while (lowercaseString[frontCursor].match(/\W|_/)) {
            frontCursor++;
        }
        while (lowercaseString[backCursor].match(/\W|_/)) {
            backCursor--;
        }
        if (lowercaseString.charCodeAt(frontCursor) != lowercaseString.charCodeAt(backCursor)) {
            return false;
        }
        frontCursor++;
        backCursor--;
    }

    return true;
}

