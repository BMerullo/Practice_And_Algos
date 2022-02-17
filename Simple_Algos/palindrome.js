function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr
    // return true;
}

console.log(palindrome("1234321"))

function forLoopPalindrome(str) {
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(forLoopPalindrome("12321"))