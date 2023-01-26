
    // funcion debug para comprobar que algo funciona
    function test(){
        alert("funciona correctamente.");
    }

    //La siguiente funcion sirve para que se muestren u oculten elementos en html 
    
    function validar(){
        var permiso = false;
        var mensaje = document.querySelector(".ingreso");
        var texto = mensaje.value;

        if(texto != ""){
            permiso = true; 
        }

        return permiso;
    }
    
    function ocultar(){
        var parrafo = document.querySelector(".ingreso");
        var result = document.querySelector(".visor-resultado");
        var mensaje = document.querySelector(".mensaje-resultado");
        var copiar = document.querySelector(".copiar");
        var acceso = false;

        acceso = validar();
        if(acceso){
            mensaje.style.display = "none";
            result.style.backgroundImage = "none";
            copiar.style.display = "block";
            
        }
        
    }


    function encriptar(){
        var mensaje = document.querySelector(".ingreso");
        var mensajeDos = document.querySelector(".visor-resultado");
        var parrafo = mensaje.value.toLowerCase();
        var letras = "eoiau";
        var convierte = ["enter","ober","imes","ai","ufat"];
    

        let textoEncriptado = parrafo;
        for(var pos=0; pos < letras.length; pos++){
            textoEncriptado = textoEncriptado.replaceAll(letras[pos],convierte[pos]);  
        }


        ocultar();
        if(parrafo != ""){
            mensajeDos.value = textoEncriptado;
        }
        



    }
    function desencriptar(){
        var mensaje = document.querySelector(".ingreso");
        var mensajeDos = document.querySelector(".visor-resultado");
        var parrafo = mensaje.value.toLowerCase();
        var letras = "eoiau";
        var convierte = ["enter","ober","imes","ai","ufat"];
    

        let textoDesencriptado = parrafo;
        for(var pos=0; pos < convierte.length; pos++){
            textoDesencriptado = textoDesencriptado.replaceAll(convierte[pos],letras[pos]);  
        }

        ocultar();
        if(parrafo != ""){
            mensajeDos.value = textoDesencriptado;
        }
    }

    function copiarTexto(){
        var texto = document.querySelector(".visor-resultado");
        texto.select();
        document.execCommand("copy");
    }


    // obtener control de elementos html como botones y textarea
    var encripta = document.querySelector(".botonE");
    var desencripta = document.querySelector(".botonD");
    var mensaje = document.querySelector(".ingreso");

    mensaje.focus();
    encripta.onclick = encriptar;
    desencripta.onclick = desencriptar;


