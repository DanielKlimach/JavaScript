let pacientes = document.querySelectorAll(".paciente");

for(let i = 0;i < pacientes.length;i++){
    let paciente = pacientes[i];
    let infoPeso = paciente.querySelector(".info-peso");
    let peso = infoPeso.textContent;

    let infoAltura = paciente.querySelector(".info-altura");
    let altura = infoAltura.textContent;

    let imc = peso/(altura*altura);

    let infoImc = paciente.querySelector(".info-imc");
    infoImc.textContent = imc.toFixed(2);

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
let titulo = document.querySelector(".titulo");

titulo.addEventListener("click",mostraMensagem);

function mostraMensagem(){
    console.log("fui clicado");
};

/*titulo.addEventListener("click",function(){
    console.log("eu fui clicado de outra forma!");
});  FUNÇÃO ANONIMA*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nomeValue = form.nome.value;
    var alturaValue = form.altura.value;
    var pesoValue = form.peso.value;
    var gorduraValue = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nomeValue;
    pesoTd.textContent = pesoValue;
    alturaTd.textContent = alturaValue;
    gorduraTd.textContent = gorduraValue;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});


