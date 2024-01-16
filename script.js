function isPalindrome(str) {
    if(str == '') {
        return false
    }
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

function checkPalindrome() {
    const textInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if(isPalindrome(textInput)) {
        resultElement.innerText = `${textInput} is a palindrome`;
    } else if (textInput){
        resultElement.innerText = `${textInput} is not a palindrome`;
    } else {
        resultElement.innerText = ''
        alert("Please input a value")
    }
}
