// Завдання 1

// let messageCounter = 0;

// const messageOutput = setInterval(() => {
//     messageCounter += 1;
//     alert(`Повідомлення ${messageCounter}`)
//     if (messageCounter === 5) {
//         clearInterval(messageOutput)
//     }
// }, 1000)

// Завдання 2

const animatedItems = document.querySelectorAll(".animated-item");

setInterval(() => {
    animatedItems.forEach((item) => {
        let height = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        let width = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

        let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        item.style.height = `${height}px`;
        item.style.width = `${width}px`;
    })
}, 2000)

// Завдання 3

const interactiveItems = document.querySelectorAll(".item-game");
const scoreText = document.querySelector("#score");

let score = 0;
let gameStart = true;

const intervalId = setInterval(() => {
    if (!gameStart) {
        clearInterval(intervalId)
    }
}, 1000)

setTimeout(() => {
    gameStart = false;
    console.log("Час гри завершенно");
}, 20000)

interactiveItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (gameStart) {
            score += 1;
            scoreText.textContent = `Очки: ${score}`;
        }

    })
})

// Завдання 4

const timeInput = document.querySelector("#input-time");

document.querySelector("#start-button").addEventListener("click", () => {
    let time = timeInput.value;
    setTimeout(() => {
        console.log(`Повідомлення було виведенно через ${time}`);
    }, time * 1000)
})