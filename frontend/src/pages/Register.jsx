import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

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
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            value={name} 
                            onChange={onChange} 
                            type="text" 
                            className="form-control" 
                            id="name" name="name" 
                            placeholder='Enter your name' 
                        />
                    </div>
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
                        <input 
                            value={password2} 
                            onChange={onChange} 
                            type="password" 
                            className="form-control" 
                            id="password2" name="password2" 
                            placeholder='Confirm password' 
                        />
                    </div>
                    <div className="form-group"> 
                        <button type="submit" className='btn btn-block'>Register</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Register
