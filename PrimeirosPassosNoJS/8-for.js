console.log("Working with lists \n");
const listOfDestins = new Array(
    `Salvador`,
    `São Paulo`,
    `Brasília`
);

let destiny = `Brasília`;
let destinyExisting = false;

for(let count = 0;count < 3; count ++){ //1° declare the variable responsable for "for", 2°condition for work,3°counter += 1
    if(listOfDestins[count] == destiny){
        console.log(`Existing Destiny, good trip to ${destiny}!`);
        destinyExisting = true;
        break;
    }
};
if(destinyExisting == false){
    console.log(`Destiny not exist!`);
};