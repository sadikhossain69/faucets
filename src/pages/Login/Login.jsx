import { GoogleLogin, googleLogout } from '@react-oauth/google';
import './Login.css'
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [auth, setAuth] = useState({})

    return (
        <div className='authDesign'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    let decoded = jwt_decode(credentialResponse.credential);
                    setAuth(decoded);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            {
                auth && <Button style={{ marginLeft: "10px" }} onClick={() => googleLogout()}>Log Out</Button>
            }
        </div>
    );
};

export default Login;