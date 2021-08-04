const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsToDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;

    const mins = now.getMinutes();
    const minsToDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsToDegrees}deg)`;

    const hours = now.getHours();
    const hoursToDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursToDegrees}deg)`;
};

setInterval(setDate, 1000);