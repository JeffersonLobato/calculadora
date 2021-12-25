window.addEventListener("load", function(){


    //Variaveis do visor

    var numAnterior = document.getElementById("numAnterior");
    var sinalAtual = document.getElementById("operadorMatemático");;
    var resultado = document.getElementById("texto");
    var operadorAnterior = "";
   
   
    //Variaveis que recebem os botões

    var reset = document.getElementById("reset");
    var apagar = document.getElementById("apagar");
    var porcent = document.getElementById("porcentagem");
    var divisao = document.getElementById("divisao");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var mult = document.getElementById("multiplicacao");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var subtracao = document.getElementById("subtracao");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var soma = document.getElementById("soma");
    var sinais = document.getElementById("sinais");
    var zero = document.getElementById("zero");
    var virgula = document.getElementById("virgula");
    var igual = document.getElementById("igual");

    document.addEventListener("keydown", detecta)

    function detecta(event){

        var tecla = event.key;

        if (tecla == "0"){

            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "0";

            }else{
                resultado.innerHTML = textoNovo + "0";
            }

        }
        
        if (tecla == "1"){

            var textoNovo = resultado.innerHTML;
    
            if(textoNovo == "0"){
    
                resultado.innerHTML = "1";
    
            }else{
                resultado.innerHTML = textoNovo + "1";
            }

        }
        
        if (tecla == "2"){

            var textoNovo = resultado.innerHTML;

            if(textoNovo == "0"){

                resultado.innerHTML = "2";
    
            }else{
                resultado.innerHTML = textoNovo + "2";
            }

        }

        if (tecla == "3"){

            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "3";

            }else{
                resultado.innerHTML = textoNovo + "3";
            }

        }

        if (tecla == "4"){

            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "4";

            }else{
                resultado.innerHTML = textoNovo + "4";
            }

        }

        if (tecla == "5"){

            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "5";

            }else{
                resultado.innerHTML = textoNovo + "5";
            }

        }

        if (tecla == "6"){
            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "6";

            }else{
                resultado.innerHTML = textoNovo + "6";
            }

        }

        if (tecla == "7"){
            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "7";

            }else{
                resultado.innerHTML = textoNovo + "7";
            }

        }

        if (tecla == "8"){

            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "8";

            }else{
                resultado.innerHTML = textoNovo + "8";
            }

        }

        if (tecla == "9"){
            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){

                resultado.innerHTML = "9";

            }else{
                resultado.innerHTML = textoNovo + "9";
            }

        }

        if (tecla == "+"){

            if(operadorAnterior == ""){
                operadorAnterior = "+";
                sinalAtual.innerHTML = "+";
                numAnterior.innerHTML = resultado.innerHTML;
                resultado.innerHTML = "0";
                
            }else{
    
                let res;
                res = calcular();
                resultado.innerHTML = "0";
                operadorAnterior = "+";
                sinalAtual.innerHTML = "+";
                numAnterior.innerHTML = res;
    
    
            }

        }

        if (tecla == "-"){

            if(operadorAnterior == ""){
                operadorAnterior = "-";
                sinalAtual.innerHTML = "-";
                numAnterior.innerHTML = resultado.innerHTML;
                resultado.innerHTML = "0";
                
            }else{
    
                let res;
                res = calcular();
                resultado.innerHTML = "0";
                operadorAnterior = "-";
                sinalAtual.innerHTML = "-";
                numAnterior.innerHTML = res;
    
    
            }

        }

        if (tecla == "*"){

            if(operadorAnterior == ""){
                operadorAnterior = "x";
                sinalAtual.innerHTML = "x";
                numAnterior.innerHTML = resultado.innerHTML;
                resultado.innerHTML = "0";
                
            }else{
    
                let res;
                res = calcular();
                resultado.innerHTML = "0";
                operadorAnterior = "x";
                sinalAtual.innerHTML = "x";
                numAnterior.innerHTML = res;
    
    
            }

        }

        if (tecla == "/"){

            if(operadorAnterior == ""){
                operadorAnterior = "/";
                sinalAtual.innerHTML = "/";
                numAnterior.innerHTML = resultado.innerHTML;
                resultado.innerHTML = "0";
                
            }else{
    
                let res;
                res = calcular();
                resultado.innerHTML = "0";
                operadorAnterior = "/";
                sinalAtual.innerHTML = "/";
                numAnterior.innerHTML = res;
    
    
            }

        }

        if (tecla == ","){
            var textoNovo = resultado.innerHTML;
        
            if(textoNovo == "0"){
    
                resultado.innerHTML = "0,";
    
            }else{
                resultado.innerHTML = textoNovo + ",";
            }
        }

        if (event.keyCode == 13){

            if(operadorAnterior != ""){

                res = calcular();
                resultado.innerHTML = res;
                operadorAnterior = "";
                sinalAtual.innerHTML = "";
                numAnterior.innerHTML = "";
                
            }

        }
    }


    um.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
    
            if(textoNovo == "0"){
    
                resultado.innerHTML = "1";
    
            }else{
                resultado.innerHTML = textoNovo + "1";
            }
       
        });


    dois.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "2";

        }else{
            resultado.innerHTML = textoNovo + "2";
        }
    });

    tres.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "3";

        }else{
            resultado.innerHTML = textoNovo + "3";
        }
    });

    quatro.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "4";

        }else{
            resultado.innerHTML = textoNovo + "4";
        }
    });

    cinco.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "5";

        }else{
            resultado.innerHTML = textoNovo + "5";
        }
    });

    seis.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "6";

        }else{
            resultado.innerHTML = textoNovo + "6";
        }
    });

    sete.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "7";

        }else{
            resultado.innerHTML = textoNovo + "7";
        }
    });

    oito.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "8";

        }else{
            resultado.innerHTML = textoNovo + "8";
        }
    });

    nove.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "9";

        }else{
            resultado.innerHTML = textoNovo + "9";
        }
    });

    zero.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "0";

        }else{
            resultado.innerHTML = textoNovo + "0";
        }
    });


    virgula.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        
        if(textoNovo == "0"){

            resultado.innerHTML = "0,";

        }else{
            resultado.innerHTML = textoNovo + ",";
        }
    });


    sinais.addEventListener("click", function(){
        var textoNovo = resultado.innerHTML;
        var sinal = textoNovo.match("-")
        
        if(sinal != "-"){

            resultado.innerHTML = "-" + textoNovo;
            

        }else{
            resultado.innerHTML = textoNovo.replace("-","");
        }
    });

    
    reset.addEventListener("click", function(){

        sinalAtual.innerHTML = "";
        operadorAnterior = "";
        numAnterior.innerHTML = "";       
        resultado.innerHTML = 0;
       
    });
    
    apagar.addEventListener("click", function(){

        ultimaLetra = resultado.innerHTML.length - 1;
        resultado.innerHTML = resultado.innerHTML.slice(0, ultimaLetra);

        if(resultado.innerHTML.length < 1){
            resultado.innerHTML = 0;
        }

    });



    //Tratando os operadores


    porcent.addEventListener("click", function(){

        if(operadorAnterior == ""){
            operadorAnterior = "%";
            sinalAtual.innerHTML = "%";
            numAnterior.innerHTML = resultado.innerHTML;
            resultado.innerHTML = "0";
            
        }else{

            let res;
            res = calcular();
            resultado.innerHTML = "0";
            operadorAnterior = "%";
            sinalAtual.innerHTML = "%";
            numAnterior.innerHTML = res;


        }

    });


    soma.addEventListener("click", function(){

        if(operadorAnterior == ""){
            operadorAnterior = "+";
            sinalAtual.innerHTML = "+";
            numAnterior.innerHTML = resultado.innerHTML;
            resultado.innerHTML = "0";
            
        }else{

            let res;
            res = calcular();
            resultado.innerHTML = "0";
            operadorAnterior = "+";
            sinalAtual.innerHTML = "+";
            numAnterior.innerHTML = res;


        }

    });

    subtracao.addEventListener("click", function(){

        if(operadorAnterior == ""){
            operadorAnterior = "-";
            sinalAtual.innerHTML = "-";
            numAnterior.innerHTML = resultado.innerHTML;
            resultado.innerHTML = "0";
            
        }else{

            let res;
            res = calcular();
            resultado.innerHTML = "0";
            operadorAnterior = "-";
            sinalAtual.innerHTML = "-";
            numAnterior.innerHTML = res;


        }

    });

    divisao.addEventListener("click", function(){

        if(operadorAnterior == ""){
            operadorAnterior = "/";
            sinalAtual.innerHTML = "/";
            numAnterior.innerHTML = resultado.innerHTML;
            resultado.innerHTML = "0";
            
        }else{

            let res;
            res = calcular();
            resultado.innerHTML = "0";
            operadorAnterior = "/";
            sinalAtual.innerHTML = "/";
            numAnterior.innerHTML = res;


        }

    });

    mult.addEventListener("click", function(){

        if(operadorAnterior == ""){
            operadorAnterior = "x";
            sinalAtual.innerHTML = "x";
            numAnterior.innerHTML = resultado.innerHTML;
            resultado.innerHTML = "0";
            
        }else{

            let res;
            res = calcular();
            resultado.innerHTML = "0";
            operadorAnterior = "x";
            sinalAtual.innerHTML = "x";
            numAnterior.innerHTML = res;


        }

    });

    igual.addEventListener("click", function(){

        if(operadorAnterior != ""){

            res = calcular();
            resultado.innerHTML = res;
            operadorAnterior = "";
            sinalAtual.innerHTML = "";
            numAnterior.innerHTML = "";
            
        }

    });


    function calcular(){

        let sinalAtual = operadorAnterior;
        let num1, num2;
        num1 = parseInt(numAnterior.innerHTML);
        num2 = parseInt(resultado.innerHTML);

        try{
            switch(sinalAtual){

                case "+":

                    return num1 + num2;

                    break;

                case "-":

                    return num1 - num2;

                    break;

                case "x":

                    return num1 * num2;

                    break;

                case "/":

                    return num1/num2;
                    
                    break;

                case "%":

                    return (num1*(num2/100));

                    break;

                default:

                    return resultado.innerHTML;
            }

        }

        catch(erro){
            return "erro"
        }

    }



});