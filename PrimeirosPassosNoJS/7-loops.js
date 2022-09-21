console.log("Working with lists \n");
const listOfDestins = new Array(
    `Salvador`,
    `São Paulo`,
    `Brasília`
);

let destiny = `Brasília`;
let counter = 0;
let destinyExisting = false;
while(counter < 3){
    if(listOfDestins[counter] == destiny){
        console.log(`Existing Destiny, good trip to ${destiny}!`);
        destinyExisting = true;
        break;
    }
    counter += 1; //counter = counter + 1;
};
if(destinyExisting == false){
    console.log(`Destiny not exist!`);
};