let paciente1 = document.querySelector("#paciente1");

let infoPeso = paciente1.querySelector(".info-peso");
let peso = infoPeso.textContent;

let infoAltura = paciente1.querySelector(".info-altura");
let altura = infoAltura.textContent;

let imc = peso/(altura*altura);

console.log(paciente1); //print my tr
console.log(infoPeso); //print the td of tr paciente 
console.log(peso); // print the textcontent of infopeso of paciente1 (100)
console.log(altura); //print the height valor
console.log(imc); // print the final valor of imc calculation

let infoImc = paciente1.querySelector(".info-imc");
infoImc.textContent = imc;

if(peso <= 0 || peso >=700){ 
    infoPeso.textContent = "Peso Inválido";
    infoImc.textContent = "ERRO!";
};

if(altura <= 0 || altura >=5.00){
    infoAltura.textContent = "Altura Inválida!" 
    infoImc.textContent = "ERRO!";
};
