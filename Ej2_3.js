// document.addEventListener('DOMContentLoaded', () => {
    
//     function verPalabra(){
//     let palabra = document.getElementById('palabra').innerHTML +=`<h1> ${palabra} </h1>`;
//         document.getElementById('texto').innerText += "La palabra introducida es: "+palabra;
       
//     }
    
       
//     verPalabra()
// });

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button").addEventListener('click', (event) => {
        document.getElementById('imprime').innerText=document.getElementById('palabra').value;
    });
    
});
