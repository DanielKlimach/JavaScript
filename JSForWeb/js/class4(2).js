let pacientes = document.querySelectorAll(".paciente");

for(let i = 0;i < pacientes.length;i++){
    let paciente = pacientes[i];

    let infoPeso = paciente.querySelector(".info-peso");
    let peso = infoPeso.textContent;

    let infoAltura = paciente.querySelector(".info-altura");
    let altura = infoAltura.textContent;
    
    let infoImc = paciente.querySelector(".info-imc");

    let imc = peso/(altura*altura);
    infoImc.textContent = imc.toFixed(2);

    console.log(peso,altura,imc);

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
let form = document.querySelector("#form-adiciona");
let botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click",function(evento){
    evento.preventDefault();

    let nomeValue = form.nome.value;
    let pesoValue = form.peso.value;
    let alturaValue = form.altura.value;
    let gorduraValue = form.gordura.value;
    let imcValue = pesoValue/(alturaValue*alturaValue);

    let pacienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nomeValue;
    pesoTd.textContent = pesoValue;
    alturaTd.textContent = alturaValue;
    gorduraTd.textContent = gorduraValue;
    imcTd.textContent = imcValue.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});