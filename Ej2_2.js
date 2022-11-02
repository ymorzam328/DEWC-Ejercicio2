document.addEventListener('DOMContentLoaded', () => {
    
    function prompter(){
    let palabra = prompt("Escribe una palabra: ", "");
    if (palabra==null || palabra==""){
        document.getElementById('titulo').innerText += "No ha introducido nada, por favor vuelva a intentarlo";
        prompter()

    // }else if (palabra==undefined){
    //     alert("Ha pulsado cancelar \nVuelva a intentarlo");
    //     prompter()
        
    }else {

        document.getElementById('titulo').innerHTML +=`<title> ${palabra} </title>`;
        document.getElementById('texto').innerText += "La palabra introducida es: "+palabra;
       
    }
    }
       
    prompter()
});
