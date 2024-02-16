document.addEventListener('DOMContentLoaded', function(){
    eventListers()
    darkMode()

    const nombre = document.querySelector('#nombre')
    const email = document.querySelector('#email')
    const mensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('.formulario')

    const datos = {
        nombre: '',
        email: '',
        mensaje: ''
    }


    nombre.addEventListener('input', leerTexto)
    email.addEventListener('input', leerTexto)
    mensaje.addEventListener('input', leerTexto)

    formulario.addEventListener('submit', function(e){
        e.preventDefault()

        //validacion
        const {nombre, email, mensaje } = datos

        if(nombre === '' || email === '' || mensaje === ''){

            mostrarError('Todos los campos son Obligatorios')


            return
        }

        mostrarMensaje('Formulario Enviado Correctamente')
    })

    function leerTexto(e){
        datos[e.target.id] = e.target.value
    }

    function mostrarMensaje(mensaje){
        const send = document.createElement('P')
        send.textContent = mensaje
        send.classList.add('enviar')
    
        formulario.appendChild(send)

        setTimeout(() =>{
            send.remove()
        }, 5000)
    }

    function mostrarError(mensaje){
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('error')
    
        formulario.appendChild(error)

        setTimeout(() =>{
            error.remove()
        }, 5000)
    }

    
})






function eventListers(){
    const menu = document.querySelector('.mobile-menu')

    menu.addEventListener('click', navegacion)
}

function navegacion(){
    const nav = document.querySelector('.navegacion')

    if(nav.classList.contains('mostrar')){
        nav.classList.remove('mostrar')
    }else{
        nav.classList.add('mostrar')
    }
}

function darkMode(){
    const preferencias = window.matchMedia('(prefers-color-scheme: dark)')
    
    if(preferencias.matches){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }

    preferencias.addEventListener('change', function(){
        if(preferencias.matches){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    })

    const btndark = document.querySelector('.dark')

    btndark.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode')
    })
}