// Preload audio files
const sounds = {
    'w': new Audio('tom-1.mp3'),
    'a': new Audio('tom-2.mp3'),
    's': new Audio('tom-3.mp3'),
    'd': new Audio('tom-4.mp3'),
    'j': new Audio('crash.mp3'),
    'k': new Audio('kick-bass.mp3'),
    'l': new Audio('snare.mp3')
};

let len = document.querySelectorAll(".drum").length;

// Add event listeners for clicks
for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let i_clicked = this.innerHTML;
        makeSound(i_clicked);
        buttonAnimation(i_clicked);
    });
}

// Add event listener for key presses
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    if (sounds[key]) {
        sounds[key].play();
    }
}

function buttonAnimation(currentkey) {
    let activeButton = document.querySelector("." + currentkey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 300);
    }
}
