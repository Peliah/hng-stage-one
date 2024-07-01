// variable declarations
let dateLabel = document.getElementById("dayLabel");
let timeLabel = document.getElementById("timeLabel");



// In this function we want to write  a procedure that will return the day and my current time
// whilst continuously updaing it
const day_Time = () => {
    const now = new Date();

    // getting the day of the week
    const dayOfWeek = now.getUTCDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[dayOfWeek];
    dateLabel.innerText = currentDay;


    // getting the time in hours, minutes and seconds
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    timeLabel.innerText = hours + ':' + minutes + ':' + seconds;

}

setInterval(day_Time, 1000)
