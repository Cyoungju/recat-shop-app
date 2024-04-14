import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from '../../../components/form/Form'
import app from '../../../firebase';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';


const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setfirebaseError] = useState("");

  const auth = getAuth(app);
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      navigate('/')
    })
    .catch(error => {
      return error && setfirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
  }

  return (
    <Form 
        title={"로그인"} 
        getDataForm={handleLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignIn