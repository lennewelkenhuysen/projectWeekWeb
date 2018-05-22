let wk = new Date(2018, 5, 14);

let hulp = new Date();
let jaar = hulp.getFullYear();
let maand = hulp.getMonth();
let dag = hulp.getDate();
let uur = hulp.getHours();
let minuten = hulp.getMinutes();
let seconden = hulp.getSeconds();
let milli = hulp.getMilliseconds();
let vandaag = new Date(jaar, maand, dag,uur,minuten,seconden,milli);

let milisecondenVandaag = vandaag.getTime();
let milisecondenWk = wk.getTime();

let tijdTussen = milisecondenWk - milisecondenVandaag;

let seconds = Math.floor(tijdTussen / 1000);
let minute = Math.floor(seconds / 60);
seconds = seconds % 60;
let hour = Math.floor(minute / 60);
minute = minute % 60;
let day = Math.floor(hour / 24);
hour = hour % 24;

console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
document.getElementById("timer").innerText= day.toString()+":" + hour.toString()+":" + minute.toString()+":" + seconds.toString();