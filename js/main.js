const lenguaje = document.querySelectorAll('.lenguaje');
const informacion = document.querySelectorAll('.contexto')
let lenguajeActivo = "";

lenguaje.forEach((lenguaje) =>{
    lenguaje.addEventListener('click', activar);
})


function activar(e){
    desactivar();
    e.currentTarget.classList.toggle('activo')
    Data();
}

function desactivar(){
    lenguaje.forEach((lenguaje)=>{
        lenguaje.classList.remove('activo')
    })
}

function Data(){
    lenguaje.forEach((lenguaje) =>{
        lenguaje.addEventListener('click', () =>{
            
    lenguajeActivo=lenguaje.dataset.lenguaje;
    console.log(lenguajeActivo)
    //activamos el contenedor de preguntas

    informacion.forEach((contexto) =>{
        if(contexto.dataset.lenguaje === lenguajeActivo){
            contexto.classList.add('activo')
        }else{
            contexto.classList.remove('activo')
        }
    })
        })
    })
}