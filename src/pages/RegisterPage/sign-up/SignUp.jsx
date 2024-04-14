import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from '../../../components/form/Form'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase';


export const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setfirebaseError] = useState("");

  const auth = getAuth(app);
  const handleSignuoAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user)=>{

        navigate('/')
    })
    .catch(error => {
        return error && setfirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
    }

  return (
    <Form 
        title={"가입하기"}
        getDataForm={handleSignuoAndLogin}
        firstbaseError={firebaseError}
    />
  )
}
