let pacientes = document.querySelectorAll(".paciente");

for(let i = 0;i < pacientes.length;i++){
    let paciente = pacientes[i];
    let infoPeso = paciente.querySelector(".info-peso");
    let peso = infoPeso.textContent;

    let infoAltura = paciente.querySelector(".info-altura");
    let altura = infoAltura.textContent;

    let infoImc = paciente.querySelector(".info-imc");
    infoImc.textContent = calculaImc(peso,altura);

    if(peso <= 0 || peso >=700){ 
        infoPeso.textContent = "Peso Inválido";
        infoImc.textContent = "ERRO!";
        paciente.classList.add("pacienteErro");
    };

    if(altura <= 0 || altura >=5.00){
        infoAltura.textContent = "Altura Inválida!" 
        infoImc.textContent = "ERRO!";
        paciente.classList.add("pacienteErro");
    };
};

function calculaImc(peso,altura){
    let imc = peso/(altura*altura);
    return imc.toFixed(2);
};