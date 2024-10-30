// fråga 16, skapa en ny array från "players" som innehåller de tre första spelarna

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const new_array = players.slice(0, 3);
console.log(new_array); // slice() påverkar inte den ursprungliga arrayen eftersom den skapar en kopierad del av arrayen utan att ändra originalet.

// fråga 17

const newArray = players.slice(2);
console.log(newArray);
console.log(players); // slice() lämnar alltså original-arrayen oförändrad och skapar istället en kopia av de valda elementen i en ny array.


//fråga 18
const addIteam = players.with(1, "Mbappe");
console.log(addIteam);

//fråga 19 for loop

const numbers = [5, 8, 12, 20, 3];
for (let i = 0; i < numbers.length ; i++) {
    console.log(numbers[i]);
    
}

// fråga 20

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Summan av alla tal är:", sum);


// fråga 21

let max = numbers[0]; // Starta med första talet som största värde

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // Uppdatera max om vi hittar ett större tal
  }
}

console.log("Det största talet är:", max);


// fråga 22
const doubledNumber = [];
for (let i = 0; i < numbers.length; i++) {
    doubledNumber.push(numbers[i] * 2);
    
}
console.log(doubledNumber);

//fråga 23 
let medelvärde = 0;
let summan = 0;
for (let index = 0; index < numbers.length; index++){
    summan += numbers[index];
    medelvärde = summan / numbers.length;
}
console.log(medelvärde);

// fråga 24

let minst = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] < minst){
        minst = numbers[index];
    }
}
console.log("minsta talet är:", minst);
    
// fråga 25

const mixedNumbers = [3, -5, 12, -1, 8, -6];
const positiveNumbers = [];
for (let index = 0; index < mixedNumbers.length; index++) {
    if (mixedNumbers[index] > 0 ) {
        positiveNumbers.push(mixedNumbers[index]);
    }

}
console.log(positiveNumbers);

//fråga 26

for (let positivN of mixedNumbers) {
    if (positivN > 0) {
        console.log(positivN);
        
    }
}

//fråga 27 while loop
let i = 0;
while (i < numbers.length ) {
    if (numbers[i] > 10) {
        break;
    }
    console.log(numbers[i]);
    i++;
}