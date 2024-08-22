document.querySelector('.ingrese__texto');

function encriptando(){
    let validacion = /^[a-zA-Z0-9\s,.]*$/;
    let textoIngresado= document.querySelector('.ingrese__texto').value;
    if  (validacion.test(textoIngresado)){
        
        document.getElementById("espera__mensaje").style.visibility = "hidden"; 
        document.getElementById("texto__convertido").textContent = textoIngresado
        .replaceAll('e','enter')
        .replaceAll('i','imes')
        .replaceAll('a','ai')
        .replaceAll('o','ober')
        .replaceAll('u','ufat')
        .replaceAll('E','ENTER')
        .replaceAll('I','IMES')
        .replaceAll('A','AI')
        .replaceAll('O','OBER')
        .replaceAll('U','UFAT');
        document.getElementById("boton__copiar").style.visibility = "visible";
        document.getElementById("boton__borrar").style.visibility = "visible";
    }
    else {
        alert('Verifique el texto que contiene simbolos o acentos ')
    }
}


function desencriptando(){
    let textoIngresado= document.querySelector('.ingrese__texto').value;
    //console.log(textoIngresado);
    document.getElementById("espera__mensaje").style.visibility = "hidden"; 
    document.getElementById("texto__convertido").textContent = textoIngresado
    .replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u')
    .replaceAll('ENTER','E')
    .replaceAll('IMES','I')
    .replaceAll('AI','A')
    .replaceAll('OBER','O')
    .replaceAll('UFAT','U');
    document.getElementById("boton__copiar").style.visibility = "visible";
    document.getElementById("boton__borrar").style.visibility = "visible";
}

function copiando(){
    let textoConvertido = document.getElementById('texto__convertido');
    //document.getElementById("texto__convertido").style.visibility = "visible";
    //textoConvertido.select();
   // textoConvertido.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoConvertido.textContent);
    alert('Texto copiado')
}

function borrar(){
   let respuesta= window.confirm('Esta segur@ de borrar?');
    if(respuesta==true){
    location.reload()
    }
}