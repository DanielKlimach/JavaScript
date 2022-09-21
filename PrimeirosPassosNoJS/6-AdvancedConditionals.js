console.log("Working with conditionals:");

const listOfDestins = [
    `São Paulo`,
    `Curitiba`,
    `Brasília`
];

console.log(`Disponible travels: ${listOfDestins}`);

const clientAge = 19;
const isAccompained = true;

if(clientAge >=18 || isAccompained == true){
    console.log("passport confirmed!");
    listOfDestins.splice(1,1);
    console.log(`disponible travels: ${listOfDestins}`);
    passport = true;
} else{
    console.log("passport reproved!");
    passport = false;
};

console.log("\nTravel:\n");
if(clientAge >= 18 && passport == true){
    console.log("Good Trip!");
}else if(isAccompained == true && passport == true){
    console.log("Good trip for all!");
}else{
    console.log("Travel aborted!");
};
// or = ||, and = &&

