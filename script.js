function mostrarMensagem() {
    alert(
        "AgroForte: Produção eficiente e sustentabilidade caminham juntas!"
    );
}

document
.getElementById("formContato")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    this.reset();
});