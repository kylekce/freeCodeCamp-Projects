const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(text) {
    const cleanText = text.toLowerCase().replace(/[\W_]/g, "");
    const reversedText = cleanText.split("").reverse().join("");

    console.log(cleanText, reversedText);

    return cleanText === reversedText;
}

checkButton.addEventListener("click", () => {
    const text = textInput?.value || null;

    if (text === null) {
        alert("Please input a value");
        return;
    } else if (isPalindrome(text)) {
        result.textContent = `${text} is a palindrome`;
        console.log(`${text} is a palindrome`);
    }
});
