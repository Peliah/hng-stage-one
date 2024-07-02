// variable declarations

// day and time variables
let dateLabel = document.getElementById("dayLabel");
let timeLabel = document.getElementById("timeLabel");

// goal variables
const goalsContainer = document.querySelector('.goal-container');
const monthBtnsContainer = document.querySelector('.month-btns');
const goalList = goalsContainer.querySelector('.goal-list ul');



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



// function to display the goal
function displayGoal(goalObject) {
    goalsContainer.querySelector('.goal-title').innerText = goalObject.title;
    goalsContainer.querySelector('.goal-duration').innerText = `Months: ${goalObject.months}`;
    // Clear existing list items
    goalList.innerHTML = "";

    goalObject.goals.forEach(subGoal => {
        const listItem = document.createElement('li');
        listItem.innerText = subGoal;
        goalList.appendChild(listItem);
    });
}

function createMonthButton(goalObject) {
    const button = document.createElement('button');
    button.innerText = `Months: ${goalObject.months}`;
    // button.addEventListener('click', () => displayGoal(goalObject));
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        const allButtons = monthBtnsContainer.querySelectorAll('button');
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        displayGoal(goalObject);
    });
    monthBtnsContainer.appendChild(button);
    button.classList.add('month-button')
}

goals.forEach(createMonthButton);

// Display the first goal by default (optional)
displayGoal(goals[0]);
console.log(window.innerWidth);

// window.addEventListener('resize', function() {
//     var monthBtns = document.getElementById('monthBtns');
//     if (window.innerWidth > 768) {
//         monthBtns.style.display = 'flex'; // Ensure it's displayed on larger screens
//     } else {
//         monthBtns.style.display = 'none'; // Hide it again on small screens
//     }
// });


// responsiveness of the month buttons
document.querySelector('.icon').addEventListener('click', function() {
    var monthBtns = document.querySelector('.month-btns');
    if (monthBtns.style.display === 'none' || monthBtns.style.display === '') {
        monthBtns.style.display = 'flex';
    } else {
        monthBtns.style.display = '';
    }
});

// var buttons = document.querySelectorAll('.month-btns .month-button');
// buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         document.querySelector('.month-btns').style.display = 'none';
//         // document.getElementById('monthBtns').style.display = 'none';
//     });
// });

// Reset display property on window resize