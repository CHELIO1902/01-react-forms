import { useState, useEffect } from 'react'
import logo from '../logo.svg'
import useForm from '../hooks/useForm'


const FormHook = () => {
    //paso 1: crear un UNICO estado con toda la informacion en forma de objeto
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        edad: 0,
        genero: '',
        email: '',
        password: '' 
    })

    //paso 2: simular traer data de una API y prerellenar el formulario
    useEffect(() => {
      setTimeout(() => {
        const info = {
            //JSON que manda el BackEnd
            nombre: 'Rogelio',
            apellido: 'Dominguez',
            edad: 30,
            genero: 'M',
            email: 'rogelio@devf.com',
            password: 'passwordMuySeguro'
        }
        setDatos(info)
      }, 2000)
    }, [])
    
    //aqui puedo poner la logica para procesar la data ya sea de una api local o remota
    const sendData = (data) => {
        console.log('Esta es mi data final', data)
    }

    const{input, handleInputChange, handleSubmit} = useForm(sendData, datos)

    // paso 3: crear mi formulario
    return (
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt="logo" className='logo' width='200px' height='200px' />
                <h1>Form Hook</h1>
                <form className='form'>

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        type='text'
                        name='nombre'
                        placeholder='Tu nombre'
                        onChange={handleInputChange}
                        value={input.nombre}
                    ></input>

                    <br />

                    <label htmlFor='apellido'>Apellido</label>
                    <input
                        type='text'
                        name='apellido'
                        placeholder='Tu apellido'
                        onChange={handleInputChange}
                        value={input.apellido}
                    ></input>

                    <br />

                    <label htmlFor='edad'>Edad</label>
                    <input
                        type='number'
                        name='edad'
                        placeholder='Tu edad'
                        onChange={handleInputChange}
                        value={input.edad}
                    ></input>

                    <br />

                    <label htmlFor='genero'>Genero</label>
                    <select
                        name='genero'
                        onChange={handleInputChange}
                        value={input.genero}
                    >
                        <option value=''>Elige un genero</option>
                        <option value='M'>Masculino</option>
                        <option value='F'>Femenino</option>
                    </select>

                    <br />

                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='****@algo.com'
                        onChange={handleInputChange}
                        value={input.email}
                    ></input>

                    <br />

                    <label htmlFor='Password'>Password</label>
                    <input
                        type='password'
                        name='Password'
                        placeholder='*********'
                        onChange={handleInputChange}
                        value={input.password}
                    ></input>

                    <br />

                    <button onClick={handleSubmit}>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormHook