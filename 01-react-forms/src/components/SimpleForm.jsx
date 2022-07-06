import { useState } from 'react'
import logo from '../logo.svg'

const SimpleForm = () => {
//paso 1: crear los estados donde guardare la informacion tecleada
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//paso 4: manejo lo que sucedera cuando envie mi formulario
const handleSubmit = (event) => {
    event.preventDefault()
    //vonvertir la data en un objeto JSON
    const submittedData = JSON.stringify({email, password})
    console.log(submittedData);
}

//paso 2: crear mi formulario base
    return (
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt="logo" className='logo' width='200px' height='200px' />
                <form className='form'>
                    <label htmlFor='email'>E-mail</label>
                    {/*paso 3: guardo cada cambio del input en su estado correspondiente*/}
                    <input
                        type='text'
                        name='email'
                        placeholder='correo@gmail.com'
                        onChange={(event)=> setEmail(event.target.value)}
                    ></input>

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='Password'
                        placeholder='*********'
                        onChange={(event)=> setPassword(event.target.value)}

                    ></input>

                    <button onClick={handleSubmit}>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm