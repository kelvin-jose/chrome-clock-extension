const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');


function setDate(){
  const now = new Date();
  const ampm = now.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  const nightDay = ampm.split(" ")[1];
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60)*360)+90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60)*360)+90;

  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours/12)*360)+90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
