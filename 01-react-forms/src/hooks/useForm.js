// reglas para crear un hook
//Custom Hook es una funcion que utiliza otros hooks de React.
//1. Siempre debemos usar la palabra "use" al nombrarlo, ej: useForm.
//2. Siempre deben de ser funciones (A partir de React v16 usamos Hooks).
//3. Siempre debo usar algun hook de React (useState, useEffect, useRef... etc).
//4. Deben de ser reutilizables, no paa casos muy especificos.

import { useState, useEffect } from "react"

//callback: funcion que se va a encargar de procesar el envio del form
//defaults: valores por defecto del formulario
function useForm( callback, defaults) {
    const [input, setInput] = useState(defaults) // guardo los valores del formulario

    //Carga los valores por defecto
    useEffect(()=>{
        setInput({...defaults}) //spread operator
    },[defaults])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        //Equivalente a:
        //const name = event.target.name
        //const value = event.target.value
        console.log(name,value)
        setInput({...input, [name]: value}) //actualizo la data
    }

    const handleSubmit = (event) => {
        event.preventDefault() //para que no se recargue la pagina
        callback(input)
    }

    return {
        input,
        handleInputChange,
        handleSubmit
    }


}

export default useForm