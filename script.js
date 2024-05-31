let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break')

let workTime = 25;
let breakTime = 5;

let seconds = "00"


// Display

window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
    

    workTittle.classList.add("active")
}

// Start Timer

function start() {

    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // count
    let timerFunction = () => {

        // sets the default 25 in the HTML to whatever workTime is
        document.getElementById("min").innerHTML = workMinutes;

        // sets the default 25 in the HTML to whatever seconds is
        document.getElementById("seconds").innerHTML = seconds;
        // console.log('got seconds')
        // start
        seconds = seconds - 1;
        console.log(seconds)
        if (seconds === 0) {
            console.log(workMinutes);
            workMinutes = workMinutes - 1;
            console.log(workMinutes);

            if (workMinutes === -1) {
                if (breakCount %2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    workTittle.classList.remove('active')
                    breakTittle.classList.add('active')

                } else {
                    workMinutes = workTime;
                    breakCount++;

                    breakTittle.classList.remove('active')
                    workTittle.classList.add('active')
                }
                
            }
            seconds = 59;
        }
    }
    // start the countdown
    setInterval(timerFunction, 1000); // 1000 - 1s

}