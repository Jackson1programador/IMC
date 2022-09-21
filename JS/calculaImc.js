let pacientes = document.querySelectorAll(".paciente")

for(let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]    

    let tdPeso = paciente.querySelector(".peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".altura");   
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".imc");

    let validaPeso = validandoPeso(peso);
    let validaAltura = validandoAltura(altura);

    if(!validaPeso) {
        console.log("Peso inválido");
        validaPeso = false;
        tdPeso.textContent = "Peso Inválido";
        paciente.classList.add("erro");
    }
    if(!validaAltura){
        console.log("Altura inválido");
        validaAltura = false;
        tdAltura.textContent = "Altura Inválido";
        paciente.classList.add("erro")
    }

    if(validaAltura && validaPeso) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {   
    let = 0;
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function validandoPeso (peso) {
    if(peso >= 0 && peso <= 300) {
        return true
    } else {
        return false
    }
}
function validandoAltura (altura) {
    if(altura >= 0 & altura <= 3) {
        return true
    } else {
        return false
    }
}



