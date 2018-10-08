let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"," "]
let sAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function initialize() {
 for (i = 0; i < 26; i++) {
  document.querySelector(".card-body").innerHTML += `
    <div class="key-container" onclick="addAlphabet('${sAlphabet[i]}')">
    <img src="images/keyboard-key.png" alt="" class="alpha-keys " >
    <p>${alphabet[i]}</p>
    </div>
    `
 }
 specialKeys();
}

function addAlphabet(key) {
 document.querySelector(".list-group-item").innerHTML += key;
}

function sendMassage() {
 alert("Your Massage Has Been Sent!");
 document.querySelector(".list-group-item").innerHTML = ""
}

function specialKeys() {
 document.querySelector(".card-body").innerHTML += `
            <div class="key-container" onclick="addAlphabet('${alphabet[26]}')">
            <img src="images/space-bar-key.png" alt="" class="space-key">
            <p>SPACE</p>
            </div>
            `
 document.querySelector(".card-body").innerHTML += `
            <div class="key-container" onclick="sendMassage()">
            <img src="images/keyboard-key.png" alt="" class="alpha-keys">
            <p><i class="fas fa-arrow-circle-right"></i></p>
            </div>
            `
}

document.addEventListener('keydown', e => {
 document.querySelector(".list-group-item").innerHTML += e.key;
});




























