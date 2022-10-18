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
        AddRapTime(0);
        const element = document.querySelector("#rapTime");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        AddRapTime((Date.now() - startTime - totalStopTime) / 1000);
    }
};

function AddRapTime(time) {
    const element = document.querySelector("#rapTimeBox");
    let createElement = document.createElement("div");
    createElement.textContent = "ラップタイム: " + time.toFixed(2);
    element.insertBefore(createElement, element.firstChild);
}
