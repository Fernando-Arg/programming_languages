const definicion = document.querySelectorAll(' .definicion');

definicion.forEach((def) => { 
    def.addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('activo')
    

    const parrafo = def.querySelector('.definicion__parrafo')
    const alturaReal = parrafo.scrollHeight
    console.log(alturaReal)
        

    if(!parrafo.style.maxHeight){
        parrafo.style.maxHeight = alturaReal + 'px'
    }else{
        parrafo.style.maxHeight = ""

    }

    definicion.forEach((elemento) => {
        if(def!== elemento){
            elemento.classList.remove('activo')
            elemento.querySelector('.definicion__parrafo').style.maxHeight= null;
        }
    })
    })

})
