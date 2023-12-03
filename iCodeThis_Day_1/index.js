const daysHtml = document.getElementById("days");
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");

function timeCounter(timeDifference) {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function countdownChristmas() {
  const christmas = 25;
  const currentDate = new Date();
  daysHtml.textContent = christmas - currentDate.getDate();

  const timeDifference =
    new Date(currentDate.getFullYear(), 11, christmas) - currentDate;
  const { hours, minutes, seconds } = timeCounter(timeDifference);

  hoursHtml.textContent = hours < 10 ? `0${hours}` : hours;
  minutesHtml.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsHtml.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

console.log(secondsHtml);

countdownChristmas();
setInterval(countdownChristmas, 1000);
