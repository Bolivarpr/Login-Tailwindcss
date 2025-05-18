/*var envio = document.getElementById('.enviar');{
    document.innerHTML="Login Concluido";
} */
    
const envio = document.getElementById("enviar");

    envio.onclick = function() {
  document.getElementById('mensagem').innerHTML = "Login Concluído";

  setTimeout(() => {
          mensagem.textContent = "";
        }, 8000);
}
