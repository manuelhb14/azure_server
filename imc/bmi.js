function calculo() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = peso / ((altura/100) ** 2);
    document.getElementById("imc").innerHTML = imc.toFixed(2);
    if(imc < 18.5){
        document.getElementById("color_change").style.color = "#1a9bdb";
        document.getElementById("border").style.borderColor = "#1a9bdb";
        document.getElementById("desc").innerHTML = "Peso bajo";
    }
    else if( imc >= 18.5 && imc < 25 ){
        document.getElementById("color_change").style.color = "#25ba6b";
        document.getElementById("border").style.borderColor = "#25ba6b";
        document.getElementById("desc").innerHTML = "Normal";
    }
    else if( imc >= 25 && imc < 30 ){
        document.getElementById("color_change").style.color = "#e5ff00";
        document.getElementById("border").style.borderColor = "#e5ff00";
        document.getElementById("desc").innerHTML = "Sobrepeso";
    }
    else if( imc >= 30 && imc < 35 ){
        document.getElementById("color_change").style.color = "#ffaa00";
        document.getElementById("border").style.borderColor = "#ffaa00";
        document.getElementById("desc").innerHTML = "Obesidad I";
    }
    else if( imc >= 35 && imc < 40 ){
        document.getElementById("color_change").style.color = "#f7530c";
        document.getElementById("border").style.borderColor = "#f7530c";
        document.getElementById("desc").innerHTML = "Obesidad II";
    }
    else{
        document.getElementById("color_change").style.color = "#c41408";
        document.getElementById("border").style.borderColor = "#c41408";
        document.getElementById("desc").innerHTML = "Obesidad III";
    }
}