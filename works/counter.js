let count = 0;
const countUp = () => {
    count++;
    const countElement = document.querySelector("#count");
    countElement.textContent = "回数:" + count;
};
const resetCount = () => {
    count = 0;
    const countElement = document.querySelector("#count");
    countElement.textContent = "回数:" + count;
};
