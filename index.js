// svarar på uppgifterna,
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]); // svar är Mardona 

// fråga 2 , lägg till namnet "Drogba" i slutet av arrayen
const newPlayer = names.push("Drogba");
console.log(names);

// fråga 3 , Lägg nu till namnet "Figo" i börja av arrayen.
// metoden är unshift() för att lägga element i början
const addPlayer = names.unshift("Figo");
console.log(names);

// fråga 4 , Ta nu bort det sista namnen från array med pop().
names.pop()
console.log(names);

// fråga 5 , flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen?

// första sätt 

const changeIndex = names.pop();
names.unshift("Ronaldo");
console.log(names);

// andra sätt med splice metod
const [item] = names.splice(6, 1); // ta bort index 6 från list
console.log(names);
names.splice(0, 0, item); // lägga element i början 
console.log(names);


// fråga 6
/*
När vi definierar en array  med const, är det bara själva referensen till arrayen  som är konstant. 
Det betyder att vi inte kan byta ut arrayen mot en ny array eller omdefiniera den, men vi kan fortfarande modifiera innehållet i arrayen 
 med Destruktiva metoder eftersom själva datatypen är en referenstyp.
*/

// fråg 7 , t kontrollera om "Messi" finns i arrayen
const kontrol = names.includes("messi"); // includes return  boolean (true eller false )
console.log(kontrol); // svar är false


// fråga 8 , kontrollera om zlata är i lista 
const check = names.includes("Zlatan");
if (check === true){
    console.log("Zlatan är här");
}
else{
    console.log("Zlatan är inte här");
}

// fråga 9 , Skriv ut indexet för "Maradona" i arrayen "players"

const playerIndex = names.indexOf("Maradona");
console.log(playerIndex);


// fråga 10 , Använd indexOf() för att försöka hitta indexet för "Messi"

const messiIndex = names.indexOf("messi");
console.log(messiIndex); // return -1 


// fråga 11 join metod

const allPlayer = names.join(", ");
console.log(allPlayer);

// fråga 12,
const Player = names.join("-");
console.log(allPlayer);


// fråga 13
names.splice(3, 2);
console.log(names);

// fråga 14 lägga 
const spelare = names.splice(2, 0, "Ronaldinio");
console.log(names);

// fråga 15
const indexRonaldo = names.indexOf("Ronaldo");

if (indexRonaldo !== -1) {
    // Ta bort "Ronaldo" från arrayen om han finns där
    names.splice(indexRonaldo, 1);
}

console.log(names); 



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

//fråga 28
let index = 0;
let negativeCount = 0;

while (index < mixedNumbers.length) {
  if (mixedNumbers[index] < 0) {
    negativeCount++;
  }
  index++;
}

console.log("Antalet negativa tal är:", negativeCount);

//fråga 29

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
for (let index = 0; index < words.length; index++) {
    console.log(words[index], + words[index].length);
    
}

// fråga 30 
let firstLetters = ""; // Skapa en tom sträng för att samla första bokstäverna
for (let i = 0; i < words.length; i++) {
  firstLetters += words[i][0]; // Lägg till första bokstaven i varje ord till strängen
}

console.log(firstLetters);

// fråga 31
