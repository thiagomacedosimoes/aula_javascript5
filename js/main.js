function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/thiagomacedosimoes"); //Abre em outra janela
    //Window.location.href = "https://github.com/thiagomacedosimoes"; //Abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada!!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
