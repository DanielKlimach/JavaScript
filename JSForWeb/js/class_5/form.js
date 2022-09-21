let form = document.querySelector("#form-adiciona");

let botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click",function(evento){
    evento.preventDefault();

    let paciente = obtemPacienteForm(form);

    let montaPaciente = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaPaciente);

    form.reset();

    
    function obtemPacienteForm(form){

        let paciente = {
            nomeValue: form.nome.value, 
            pesoValue: form.peso.value,
            alturaValue: form.altura.value,
            gorduraValue: form.gordura.value,
            imcValue: calculaImc(form.peso.value,form.altura.value)
        }
        return paciente;
    };

    function montaTr(paciente){
        let pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(MontaTd(paciente.nomeValue,"info-nome"));
        pacienteTr.appendChild(MontaTd(paciente.pesoValue,"info-peso"));
        pacienteTr.appendChild(MontaTd(paciente.alturaValue,"info-altura"));
        pacienteTr.appendChild(MontaTd(paciente.gorduraValue,"info-gordura"));
        pacienteTr.appendChild(MontaTd(paciente.imcValue,"info-imc"));

        return pacienteTr;
    };

    function MontaTd(dados,classe){
        let td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        return td;
    };
});

