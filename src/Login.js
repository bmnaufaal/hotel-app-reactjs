import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from './Utils/Common';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate(); 
    const handleSubmit = () => {
        let path = `/dashboard`; 
        setError(null);
        setLoading(true);
        axios.post('http://hotel-app.test/api/login/', { 
            email: email, 
            password: password
        }).then(response => {
            setLoading(false);
            setUserSession(response.data.content.access_token, response.data.content.user.name);
            navigate(path);
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) {
                setError(error.response.data.message);
            } else {
                setError("Error");
            }
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-3 fw-bold">HOTEL-APP</h5>
                            { error && <div className="error alert alert-danger" role="alert">{ error }</div>} 
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" value={ email } onChange= { e => setEmail(e.target.value) }/>
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={ password } onChange= { e => setPassword(e.target.value) }/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="button" value={loading ? 'Loading...' : 'Login'} onClick = { handleSubmit }>Sign in</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login