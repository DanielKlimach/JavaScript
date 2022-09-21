var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPaciente(form);

    let tabela = document.querySelector("#tabela-pacientes");

    let novaTr = montaTr(paciente);

    let erros = MensagemDeErros(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagemDeErros(erros);
        return;
    }
    
    tabela.appendChild(novaTr);

    form.reset();

    let limpaUl = document.querySelector("#mensagens-erros")
    limpaUl.innerHTML = "";

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

function MensagemDeErros(paciente){

    let erros = [];

    if(!validaPeso(paciente.pesoValue)){ 
        erros.push("Peso Inválido");
    }
    if(!validaAltura(paciente.alturaValue)){ 
        erros.push("Altura Inválida");
    }
    if(paciente.gorduraValue.length == 0){
        erros.push("Gordura não pode ficar em branco (miguérsrs)");
    }
    if(paciente.nomeValue.length < 2){
        erros.push("O nome não pode conter menos de dois caracteres");
    }
    return erros;
}

function exibeMensagemDeErros(erros){
    let ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}