let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById('display').innerText =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function pause() {
    running = false;
    clearInterval(timer);
}

function reset() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = ''; // Clear laps
}

function lap() {
    let displayTime = document.getElementById('display').innerText;
    let lapList = document.getElementById('laps');
    let li = document.createElement('li');
    li.innerText = `Lap: ${displayTime}`;
    lapList.appendChild(li);
}
