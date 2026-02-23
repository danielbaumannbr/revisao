const texto = document.getElementById("texto")
const botao = document.getElementById("botao")

const senha = "SENAI10"


botao.addEventListener("click",()=>{
    const codigo = document.getElementById("cupom").value.trim().toUpperCase()
   
    if (codigo==senha){        
        texto.textContent="Você ganhou 10% de desconte em sua compra."
        botao.textContent="Resgatado"
    }else{
        texto.textContent="Código inválido."
        botao.textContent="Resgatar brinde"
     
    }
    
});
