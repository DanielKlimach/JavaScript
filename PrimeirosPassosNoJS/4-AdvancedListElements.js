let listForWork = [`Banana`, `Apple`, `Melon`,`Orange`];
let firstFruit = listForWork[0];
let lastFruit = listForWork[listForWork.length-1];// i tell that lastFruit = last position of listForWork[Orange]
//.length give the number of itens of some element, in this case, my list, but he start counting from 1, not from 0
console.log(firstFruit,lastFruit);
//he also serve in string, hes give the number of the amount letters in the word.str
console.log(listForWork.length);//give the amount of itens of list. Its a counter

console.log(listForWork.indexOf(`Melon`));//serve to find a item in my list 

let copyList = listForWork.slice(); //serve to copy the itens in a list
console.log(copyList);

