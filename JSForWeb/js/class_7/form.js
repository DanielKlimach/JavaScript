var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var tabela = document.querySelector("#tabela-pacientes");

    var novaTr = montaTr(paciente);

    var erros = MensagemDeErros(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagemDeErros(erros);
        return;
    }
    
    tabela.appendChild(novaTr);

    form.reset();

    var limpaUl = document.querySelector("#mensagens-erros")
    limpaUl.innerHTML = "";

});

function obtemPaciente(form){
    var dados = {
        nomeValue: form.nome.value,
        pesoValue: Number(form.peso.value).toFixed(2),
        alturaValue: Number(form.altura.value).toFixed(2),
        gorduraValue: Number(form.gordura.value).toFixed(2),
        imcValue: calculaImc(form.peso.value,form.altura.value)
    };
    return dados;
};

function montaTd(dado,classe){

    var tdPronta = document.createElement("td");
    tdPronta.textContent = dado;
    tdPronta.classList.add(classe);
    return tdPronta;
}

function montaTr(paciente){
    var trPronta = document.createElement("tr");
    trPronta.classList.add("paciente");
    trPronta.appendChild(montaTd(paciente.nomeValue,"info-nome"));
    trPronta.appendChild(montaTd(paciente.pesoValue,"info-peso"));
    trPronta.appendChild(montaTd(paciente.alturaValue,"info-altura"));
    trPronta.appendChild(montaTd(paciente.gorduraValue,"info-gordura"));
    trPronta.appendChild(montaTd(paciente.imcValue,"info-imc"));;
    return trPronta;
};

function MensagemDeErros(paciente){

    var erros = [];

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
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}