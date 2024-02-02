const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = textInput?.value;

    if (text === "") {
        alert("Please input a value");
        return;
    } else if (isPalindrome(text)) {
        alert("The text is a palindrome");
    }
});

function isPalindrome(text) {
    const cleanText = text.toLowerCase().replace(/[\W_]/g, "");
    const reversedText = cleanText.split("").reverse().join("");

    return cleanText === reversedText;
}
