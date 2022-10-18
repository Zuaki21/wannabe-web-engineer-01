let isStarted = false;
let isReseted = true;
let startTime = 0;
let nowTime = 0;
let stopTime = 0; //止めた瞬間の時間
let totalStopTime = 0; //止めた総時間
var counterInterval;

function viewCounter() {
    const countElement = document.querySelector("#count");
    nowTime = (Date.now() - startTime - totalStopTime) / 1000;
    countElement.textContent = "秒数: " + nowTime.toFixed(2);
}

const start = () => {
    const countElement = document.querySelector("#count");
    const statusElement = document.querySelector("#status");
    if (!isStarted) {
        if (isReseted) {
            isReseted = false;
            startTime = Date.now();
        } else {
            totalStopTime += Date.now() - stopTime;
        }

        isStarted = true;
        counterInterval = setInterval("viewCounter()", 10);
        statusElement.textContent = "計測中";
    } else {
        isStarted = false;
        counterInterval;
        stopTime = Date.now();
        clearInterval(counterInterval);
        statusElement.textContent = "停止中";
    }
};

const reset = () => {
    if (!isStarted) {
        const countElement = document.querySelector("#count");
        countElement.textContent = "秒数: 0.00";
        startTime = Date.now();
        totalStopTime = 0;
        isReseted = true;
        ViewRapTime(0);
    } else {
        ViewRapTime((Date.now() - startTime - totalStopTime) / 1000);
    }
};

function ViewRapTime(time) {
    const element = document.querySelector("#rapTime");
    element.textContent = "ラップタイム: " + time.toFixed(2);
}
