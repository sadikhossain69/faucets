import { GoogleLogin, } from '@react-oauth/google';
import './Login.css'
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import cogoToast from 'cogo-toast';

const Login = () => {

    const [auth, setAuth] = useState({})
    const navigate = useNavigate()

    return (
        <div className='authDesign'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    let decoded = jwt_decode(credentialResponse.credential);
                    cogoToast.success(`You have successfully login by ${decoded.email}`)
                    setAuth(decoded);
                    navigate('/')
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            {
                auth && <Button style={{ marginLeft: "10px" }}>Log Out</Button>
            }
        </div>
    );
};

export default Login;