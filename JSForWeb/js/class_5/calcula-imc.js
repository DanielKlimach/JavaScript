let pacientes = document.querySelectorAll(".paciente");

for(let i = 0;i < pacientes.length;i++){
    let paciente = pacientes[i];

    let infoPeso = paciente.querySelector(".info-peso");
    let peso = infoPeso.textContent;

    let infoAltura = paciente.querySelector(".info-altura");
    let altura = infoAltura.textContent;
    
    let infoImc = paciente.querySelector(".info-imc");

    infoImc.textContent = calculaImc(peso,altura);

    if(peso <= 0 || peso >= 750){
        infoPeso.textContent = `Peso Inválido`;
        paciente.classList.add("pacienteErro");
        infoImc.textContent = "Valor Inválido";

    };
    if(altura <= 0 || altura >= 4){
        infoPeso.textContent = `Peso Inválido`;
        paciente.classList.add("pacienteErro");
        infoImc.textContent = "Valor Inválido";

    };
};

function calculaImc(peso,altura){
    let imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
};