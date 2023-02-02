const repeatMsg = document.querySelector('.repeat-msg');
const wrongLettersMsg = document.querySelector('.wrong-letters-msg');
const rightLettersMsg = document.querySelector('.right-letters-msg');
const titleWrongLetters = document.querySelector('.title');
const img = document.querySelector('.img');
const msg = document.querySelector('.msg');
const modal = document.querySelector('.modal');
const btnstart = document.querySelector('.start-game');

const technologies = [
    "php", "javascript", "node", "phyton", "java", "react", "vue", "angular"
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
function isLetter(code) {
    return code >= 65 && code <= 90;
}
function showMsgRepeatLetter() {
    repeatMsg.innerHTML = "choose a different word";
    setTimeout(() => {
        repeatMsg.classList.add('hidden')
    }, 1000)
}
function updateGame() {
    showWrongLetter();
    showRightLetter();
    changeImages();
    startGameAgain();
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
        } 
        
        else {
            rightLettersMsg.innerHTML += `-`;
        }

        if(secretWord.toUpperCase() === rightLettersMsg.innerText){
            modal.classList.remove('hidden-modal');
            msg.innerHTML = "Congratulation! You win!"
        }
        
       
    })
   
}
function changeImages() {
    debugger;
    for (let i = 0; i <= wrongLetters.length; i++) {

        switch (i) {
            case 6:
                img.src = 'img/img6.png';
                modal.classList.remove('hidden-modal')
                msg.innerHTML = "Game over!"
                break;
            case 5:
                img.src = 'img/img5.png';
                break;
            case 4:
                img.src = 'img/img4.png';
                break;
            case 3:
                img.src = 'img/img3.png';
                break;
            case 2:
                img.src = 'img/img2.png';
                break;
            case 1:
                img.src = 'img/img1.png';
                break;
            case 0:
                img.src = 'img/img.png';
                break;
           
        }

    }
}
function startGameAgain(){
   btnstart.addEventListener("click", () => {
    window.location.reload();
   })
}