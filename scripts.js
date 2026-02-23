const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
botao.addEventListener("click",()=>{
    texto.textContent="Você já está ganhando conhecimento."
    botao.textContent="Resgatado"
});
