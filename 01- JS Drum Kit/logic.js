let rectangles = document.querySelectorAll(".rectangle");

for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].addEventListener("click", handleClick);
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) 
        return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
}

function handleClick(e) {
    let innerText = e.target.innerText[0];
    let keyCode;
    switch (innerText) {
        case 'A':
            keyCode = 65;
            break;
        case 'S':
            keyCode = 83;
            break;
        case 'D':
            keyCode = 68;
            break;
        case 'F':
            keyCode = 70;
            break;
        case 'G':
            keyCode = 71;
            break;
        case 'H':
            keyCode = 72;
            break;
        case 'J':
            keyCode = 74;
            break;
        case 'Z':
            keyCode = 90;
            break;
        case 'X':
            keyCode = 88;
            break;
        case 'C':
            keyCode = 67;
            break;
        case 'V':
            keyCode = 86;
            break;
        case 'B':
            keyCode = 66;
            break;
        case 'N':
            keyCode = 78;
            break;
        case 'Q':
            keyCode = 81;
            break;
        case 'W':
            keyCode = 87;
            break;
        case 'E':
            keyCode = 69;
            break;
        case 'R':
            keyCode = 82;
            break;
        case 'T':
            keyCode = 84;
            break;
    }
    console.log(keyCode);
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) 
        return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
}