var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    var erroStatus = document.querySelector("#erro-status");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        erroStatus.classList.add("invisivel");

        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
        console.log(pacientes);

        pacientes.forEach( function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroStatus.classList.remove("invisivel");
    };
    });
    xhr.send();
});