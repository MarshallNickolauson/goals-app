import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='container'>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and start setting goals.</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            value={email} 
                            onChange={onChange} 
                            type="text" 
                            className="form-control" 
                            id="email" name="email" 
                            placeholder='Enter your email' 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            value={password} 
                            onChange={onChange} 
                            type="password" 
                            className="form-control" 
                            id="password" name="password" 
                            placeholder='Enter your password' 
                        />
                    </div>
                    <div className="form-group"> 
                        <button type="submit" className='btn btn-block'>Login</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login
