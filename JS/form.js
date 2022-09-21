let inputNome = document.querySelector(".formulario-nome");
let inputPeso = document.querySelector(".formulario-peso");
let inputAltura = document.querySelector(".formulario-altura");


let enviaFormulario = document.querySelector(".envia-formulario");
console.log(enviaFormulario);

enviaFormulario.addEventListener("click", function(event){
    event.preventDefault();
    
    let form = document.querySelector(".formulario");
    let paciente = obetendoPaciente(form);
    

 // aqui em baixo tá o erro
    erros = validaPaciente(paciente);
    console.log(erros)
    console.log(erros.length)
       if(erros.length > 0 ) {
        exibeMensagemDeErro(erros)
        return;        
    }
    console.log(typeof erros)
 // Aqui em cima tá o erro  - acho que o erro tpa no push ta função  validapaciente
 let pacienteTr = criaPacienteTr(paciente);





    let tabela = document.querySelector(".tabela-imc");
    tabela.appendChild(pacienteTr);

    form.reset();
})

function obetendoPaciente (form) {
    let paciente = {
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value,
        imc: calculaImc(inputPeso.value, inputAltura.value)
    }
    return paciente
}

function  criaPacienteTr (paciente) {


        
    
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

        let tdNome = document.createElement("td")
        tdNome.classList.add("nome");

        let tdPeso = document.createElement("td");
        tdPeso.classList.add("peso");

        let tdAltura = document.createElement("td");
        tdAltura.classList.add("altura");

        let tdImc = document.createElement("td");
        tdImc.classList.add("imc");

        tdNome.textContent = paciente.nome;
        tdPeso.textContent = paciente.peso;
        tdAltura.textContent = paciente.altura;
        tdImc.textContent = paciente.imc;

        pacienteTr.appendChild(tdNome);
        pacienteTr.appendChild(tdPeso);
        pacienteTr.appendChild(tdAltura);
        pacienteTr.appendChild(tdImc);



        return pacienteTr
    
    
}

function validaPaciente (paciente) {
    console.log("fui chamado")
    console.log(paciente)
    

    let erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome do paciente não pode está em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso do paciente não pode está em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("O altura do paciente não pode está em branco");
    }

   if (!validandoPeso(paciente.peso)) {
        erros.push("Peso inválido!!");   
   } 

   if (!validandoAltura(paciente.altura)) {

     erros.push("Altura é invalida");
        }
   

   return erros;
  

}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML=""

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });
        
    
}

