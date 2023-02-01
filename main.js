const repeatMsg = document.querySelector('.repeat-msg');
const wrongLettersMsg = document.querySelector('.wrong-letters-msg');
const rightLettersMsg = document.querySelector('.right-letters-msg');
const titleWrongLetters = document.querySelector('.title');

const technologies = [
    "php", "javascript", "node", "phyton", "java"
];
const secretWord = technologies[Math.floor(Math.random() * technologies.length)]
const wrongLetters = [];
const rightLetters = [];

document.addEventListener("keydown", (event) => {
    const code = event.keyCode;
    if (isLetter(code)) {
        const letter = event.key;
        //if repeat
        if (wrongLetters.includes(letter)) {
            showMsgRepeatLetter()
        } //put on the array 
        else {
            if (secretWord.includes(letter)) {
                rightLetters.push(letter)
            } else {
                wrongLetters.push(letter);
            }
        }
        updateGame();
    }
})
function updateGame() {
    showWrongLetter()
    showRightLetter()
}
function showWrongLetter() {
   
    wrongLettersMsg.innerHTML = "";
    wrongLetters.forEach(letter => {
        titleWrongLetters.innerHTML = `Wrong Letters`
        wrongLettersMsg.innerHTML += letter;
    })
}
function showRightLetter() {
    const rightLettersMsg = document.querySelector('.right-letters-msg');
    rightLettersMsg.innerHTML = "";
    secretWord.split("").forEach(letter => {
        if (rightLetters.includes(letter)) {
            rightLettersMsg.innerHTML += letter;
        } else {
            rightLettersMsg.innerHTML += `-`;
        }

    })
}
function isLetter(code) {
    return code >= 65 && code <= 90;
}

function showMsgRepeatLetter() {
    repeatMsg.innerHTML = "choose a different word";
    setTimeout(() => {
        repeatMsg.classList.add('hidden')
    }, 1000)
}