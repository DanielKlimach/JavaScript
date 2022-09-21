var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var erros = MensagemDeErros(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagemDeErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var limpaUl = document.querySelector("#mensagens-erros")
    limpaUl.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};

function obtemPaciente(form){
    var dados = {
        nome: form.nome.value,
        peso: Number(form.peso.value).toFixed(2),
        altura: Number(form.altura.value).toFixed(2),
        gordura: Number(form.gordura.value).toFixed(2),
        imc: calculaImc(form.peso.value,form.altura.value)
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
    trPronta.appendChild(montaTd(paciente.nome,"info-nome"));
    trPronta.appendChild(montaTd(paciente.peso,"info-peso"));
    trPronta.appendChild(montaTd(paciente.altura,"info-altura"));
    trPronta.appendChild(montaTd(paciente.gordura,"info-gordura"));
    trPronta.appendChild(montaTd(paciente.imc,"info-imc"));;
    return trPronta;
};

function MensagemDeErros(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso)){ 
        erros.push("Peso Inválido");
    }
    if(!validaAltura(paciente.altura)){ 
        erros.push("Altura Inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ficar em branco (miguérsrs)");
    }
    if(paciente.nome.length < 2){
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