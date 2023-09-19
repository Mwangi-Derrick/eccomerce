import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Eye from '@mui/icons-material/Visibility';
import EyeSlash from '@mui/icons-material/VisibilityOff';
import "../styles/LoginPage.css";
import {auth,provider}  from '../api/baas';
import {useNavigate} from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [eyeOpen, setEye] = useState(true);
  const TogglePasswordVisibity = () => {
    setEye((prev) => !prev)
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  console.log(auth)
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
           navigate("/")
        }
      }).catch(error => alert(error.message))
  }
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then((authUser) => {
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <section className='login-page'>
      <div className='login-form'>

        <h2 className='welcome'>Welcome to Jumia clone</h2>
        <p className='text'>Enter your Email and Password to login or create an account</p>
        <div className='email-input'>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' type="email" /></div>
        <div className='password-input'>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' type={eyeOpen ? "text" : "password"} />
          {eyeOpen ? <i className='eye'><Eye onClick={TogglePasswordVisibity} /></i> :
            <i className='eye'>
              <EyeSlash onClick={TogglePasswordVisibity} /></i>}</div>
        <button  className='continue' onClick={register}>Login</button>
        <button onClick={signInWithGoogle} className='google'><GoogleIcon/><span>Login with Google</span></button>
        </div>
    </section>
  )
}

export default LoginPage