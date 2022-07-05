import { useRef } from 'react'
import logo from '../logo.svg'

const RefLogin = () => {
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('E-mail'),
            password: formData.get('Password')
        }
        console.log(data);
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt="logo" className='logo' width='200px' height='200px' />
                <form className='form' ref={form}>
                    <label htmlFor='E-mail'>E-mail</label>
                    <input
                        type='text'
                        name='E-mail'
                        placeholder='correo@gmail'
                    ></input>

                    <label htmlFor='Password'>Password</label>
                    <input
                        type='password'
                        name='Password'
                        placeholder='*********'
                    ></input>

                    <button onClick={handleSubmit}>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RefLogin