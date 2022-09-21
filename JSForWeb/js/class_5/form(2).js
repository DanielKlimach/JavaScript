var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPaciente(form);

    let tabela = document.querySelector("#tabela-pacientes");

    let novaTr = montaTr(paciente);
    
    tabela.appendChild(novaTr);

    form.reset();

});

function obtemPaciente(form){
    let dados = {
        nomeValue: form.nome.value,
        pesoValue: form.peso.value,
        alturaValue: form.altura.value,
        gorduraValue: form.gordura.value,
        imcValue: calculaImc(form.peso.value,form.altura.value)
    };
    return dados;
};

function montaTr(paciente){
    let trPronta = document.createElement("tr");
    trPronta.classList.add("paciente");
    trPronta.appendChild(montaTd(paciente.nomeValue,"info-nome"));
    trPronta.appendChild(montaTd(paciente.pesoValue,"info-peso"));
    trPronta.appendChild(montaTd(paciente.alturaValue,"info-altura"));
    trPronta.appendChild(montaTd(paciente.gorduraValue,"info-gordura"));
    trPronta.appendChild(montaTd(paciente.imcValue,"info-imc"));;
    return trPronta;
};

function montaTd(dado,classe){

    let tdPronta = document.createElement("td");
    tdPronta.textContent = dado;
    tdPronta.classList.add(classe);
    return tdPronta;
}