console.log(parseInt("2"));
//this command "parseInt" convert a variable in int
console.log(parseInt("2")/parseInt("2"));
console.log("Exemple:");
console.log("2"+"2");
console.log(parseInt("2")+parseInt("2"));

console.log("Daniel" / "2"); //Not a Number (NaN) he try divide even so,
//but Daniel not a number and he cant

console.log(6.5); // right, will be converted in float
console.log(6,5); //wrong
console.log(parseFloat("2.5")+(parseFloat("2.75"))); //"parsefloat" convert a variable in float(decimal numbers)

const name = "Daniel";
const surname = "Klimach";

console.log("\nForms of separate ")
console.log(name + surname); 
console.log(name, surname);
console.log(name + " " + surname);

console.log("\nAdvencing in variables");
console.log(`My name is ${name} ${surname}`); // Just works with ``, dont works with ""

console.log("\nOther type of variable");
console.log("if i want change a variable i need:");

let day = "16";
let month = "Abril";
day = day + month;
console.log(day);
// if it were the const type it would give an error because the const cannot change

// try as much as possible, to keep the variables with the type const

// the good exemple of let its:

let accountant = 0;
accountant = accountant + 1;




