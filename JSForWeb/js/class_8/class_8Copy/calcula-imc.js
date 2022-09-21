var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length;i++){
    var paciente = pacientes[i];
    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    var infoImc = paciente.querySelector(".info-imc");
    infoImc.textContent = calculaImc(peso,altura);

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){ 
        infoPeso.textContent = "Peso Inválido";
        infoImc.textContent = "ERRO!";
        paciente.classList.add("paciente-erro");
    };

    if(!alturaEhValido){
        infoAltura.textContent = "Altura Inválida!" 
        infoImc.textContent = "ERRO!";
        paciente.classList.add("paciente-erro");
    };
};

function calculaImc(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
};

function validaPeso(peso){
 if(peso >= 1 && peso < 500){
    return true;
 }
    else{
        return false;
    };
};

function validaAltura(altura){
    if(altura > 0 && altura < 4){
        return true;
    }
    else{
        return false;
    };
};