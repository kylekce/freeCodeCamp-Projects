const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = textInput?.value || null;

    if (text === null) {
        alert("Please input a value");
        return;
    } else if (isPalindrome(text)) {
        const textNode = document.createTextNode(`${text} is a palindrome`);
        result.textContent = "";
        result.appendChild(textNode);

        result.style.color = "green";
    } else {
        const textNode = document.createTextNode(`${text} is not a palindrome`);
        result.textContent = "";
        result.appendChild(textNode);

        result.style.color = "red";
    }
});

function isPalindrome(text) {
    const cleanText = text.toLowerCase().replace(/[\W_]/g, "");
    const reversedText = cleanText.split("").reverse().join("");

    return cleanText === reversedText;
}
