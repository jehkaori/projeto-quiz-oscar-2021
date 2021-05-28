let botaoIniciar = document.getElementById("iniciar");

botaoIniciar.onclick = function iniciar(){
    let name = prompt("Qual é o seu nome?");
    alert("Para responder, digite a letra correspondente à alternativa certa! Boa sorte!")
    let pergunta1 = prompt("Qual o filme ganhou o Oscar na categoria Melhor Filme? \nA)Meu pai \nB)Minari \nC)Nomadland \nD)Judas e o messias negro");
    let pergunta2 = prompt("Qual o filme ganhou o Oscar na categoria, Melhor roteiro adaptado? \nA)Nomadland \nB)Uma noite em Miami \nC)Meu pai \nD)O tigre branco");
    let pergunta3 = prompt("Qual o filme ganhou o Oscar na categoria Melhor trilha sonora? \nA)Minari \nB)Soul \nC)Mank \nD)Relatos do mundo"); 
    
    let resposta1; 
    let resposta2;
    let resposta3;
    let certas = 0;
    
    
    if(pergunta1=="C" || pergunta1=="c"){
        resposta1 = "correta";
        certas += 1;
    }else{
        resposta1 = "errada";
    }

    if(pergunta2=="C" || pergunta2=="c"){
        resposta2 = "correta";
        certas += 1;
    }else{
        resposta2 = "errada";
    }

    if(pergunta3=="B" || pergunta3=="b"){
        resposta3 = "correta";
        certas += 1;
    }else{
        resposta3 = "errada";
    }

    // console.log(resposta1, resposta2, resposta3)

    document.getElementById("boasVindas").style.display = "none";

    let resultado = document.getElementById("resultados");
    // resultado.style.display = "block";

    let corretas = document.getElementById("corretas");
    let erradas = document.getElementById("erradas")
    let acertos = document.getElementById("acertos")
    


    if(name=="" || name==null){
        acertos.innerHTML= "Você acertou "+ certas + " de 3 questões!"
    } else{
        acertos.innerHTML=name+", você acertou "+ certas + " de 3 questões!"
    }

    corretas.innerHTML="<h3>Respostas Corretas</h3>"
    erradas.innerHTML="<h3>Respostas Incorretas</h3>"
        

    if(resposta1=="correta"){
        corretas.innerHTML += "<p>Pergunta 1 correta &#128077 <br> O ganhador de Melhor Filme foi <b>Nomadland</b><p><br>"

    }else{
        erradas.innerHTML += "<p>Pergunta 1 incorreta &#10060<br> O ganhador de Melhor Filme foi <b>Nomadland</b><p><br>"
    }

    if(resposta2=="correta"){
        corretas.innerHTML += "<p>Pergunta 2 correta &#128077<br> O ganhador de Melhor roteiro adaptado foi <b>Meu Pai</b><p><br>"

    }else{
        erradas.innerHTML += "<p>Pergunta 2 incorreta &#10060<br> O ganhador de Melhor roteiro adaptado foi <b>Meu Pai</b><p><br>"
    }

    if(resposta3=="correta"){
        corretas.innerHTML += "<p>Pergunta 3 correta &#128077<br> O ganhador de Melhor tilha sonora foi <b>Soul</b><p><br>"

    }else{
        erradas.innerHTML += "<p>Pergunta 3 incorreta &#10060<br> O ganhador de Melhor tilha sonora foi <b>Soul</b><p><br>"
    }

}