import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) console.log(message);
        if (isSuccess || user) navigate('/');
        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])

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

        const userData = {
            email,
            password
        }

        dispatch(login(userData));
    }

    if (isLoading) return <Spinner />

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
