let timeStamp = document.querySelector('.time-stamp');


function timeStampUpdate(){
    let futureDate = new Date(2021, 3, 30, 11, 59, 59);
let futureTime = futureDate.getTime();

let today = new Date().getTime();

let timeLeft = futureTime - today;

let _1sec = 1000;
let _1min = 1000 * 60;
let _1hr = 1000 * 60 * 60;
let _1day = 1000 * 60 * 60 * 24;

let daysLeft = Math.floor(timeLeft/_1day);

let hoursLeft = Math.floor(

    (timeLeft % _1day) / _1hr
);

let minsLeft = Math.floor(
    (timeLeft % _1hr) / _1min
);

let secsLeft = Math.floor(
    (timeLeft % _1min) / _1sec
);

if (secsLeft < 10) {
    secsLeft = `0${secsLeft}`
}

if (minsLeft < 10) {
    minsLeft = `0${minsLeft}`
}

if (hoursLeft < 10) {
    hoursLeft = `0${hoursLeft}`
}

if (daysLeft < 10) {
    daysLeft = `0${daysLeft}`
}

timeStamp.innerHTML = `
    <div class="days time">
                <h2>${daysLeft} <br>days</h2>
            </div>

            <div class="hours time">
                <h2>${hoursLeft} <br> hours</h2>
            </div>

            <div class="minutes time">
                <h2>${minsLeft} <br> minutes</h2>
            </div>

            <div class="seconds time">
                <h2>${secsLeft} <br> seconds</h2>
            </div>
`
}

setInterval(()=>{
    timeStampUpdate()
}, 1000)


