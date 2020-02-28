function inputWord() {
    let word = prompt("Enter a word");
    return word;
}

function isPalindrome(word){
    let countUp = 0;
    let countDown = word.length -1 ;
    while (countUp < countDown){
        if (word[countUp] !== word[countDown]){
            return false;
        }
        countUp += 1;
        countDown -= 1;
    }
    return true;
}

function showPalindrome() {
    if (isPalindrome(inputWord())){
        alert("It's a Palindrome");
    } else {
        alert("It's not a Palindrome");
    }
}