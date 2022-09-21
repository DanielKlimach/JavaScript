/*imagine make a list: 
const salvador = `Salvador`;
const saoPaulo = `São Paulo`
console.log(salvador,saoPaulo);
Its a bad form*/
console.log("Working with lists");
const listOfDestins = new Array(
    `Salvador`,
    `São Paulo`,
    `Brasília`
);
console.log(listOfDestins);

listOfDestins.push(`Curitiba`); //this command var.push serve to add a content to my list variable
console.log(listOfDestins);

//if i wanna remove a content of my list variable i need:
listOfDestins.splice(1,1);
console.log(listOfDestins);
//i choose the element starting of zero and after, i choose how many elements from the choosed element i want delete
//position 1, 1 element (just he)
listOfDestins.splice(0,2);
console.log(listOfDestins);

listOfDestins.push(`Brasília`,`São Paulo`,`Salvador`);
console.log(listOfDestins);

console.log(listOfDestins[2]); //i summon just a item in the second position
console.log(listOfDestins[1], listOfDestins[3]);





