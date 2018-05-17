let wk = new Date(2018, 5, 14);

let hulp = new Date();
let jaar = hulp.getFullYear();
let maand = hulp.getMonth();
let dag = hulp.getDate();
let vandaag = new Date(2018, 4, 17);

let milisecondenVandaag = vandaag.getTime();
let milisecondenWk = wk.getTime();

let tijdTussen = milisecondenWk - milisecondenVandaag;

let dagen = tijdTussen % 86400000;
let uren = tijdTussen % 3600000;

console.log(dagen);
console.log(uren);