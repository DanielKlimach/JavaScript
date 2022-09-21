console.log("Working with conditionals:");

const listOfDestins = [
    `São Paulo`,
    `Curitiba`,
    `Brasília`
];

console.log(`Disponible travels: ${listOfDestins}`);

const clientAge = 18;
const isAccompained = false;

if(clientAge >= 18){
    console.log("passport confirmed, client is for legal age!");
    listOfDestins.splice(1,1);
    console.log(`disponible travels: ${listOfDestins}`);
}else if(isAccompained == true){  /* }else{
    if(isAccompained == true){...} */
    console.log("passport confirmed, client is accompained!");
    listOfDestins.splice(1,1);
    console.log(`disponible travels: ${listOfDestins}`);
}else{
    console.log("passport reproved!");
    console.log(`disponible travels: ${listOfDestins}`);
}




