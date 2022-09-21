let tabela = document.querySelector(".tabela-imc");

tabela.addEventListener("click", function(event){
    
    event.target.parentNode.classList.add("efeito-visual-exclusão");

    setTimeout(function(){
        event.target.parentNode.remove();

    },500);
   
});

