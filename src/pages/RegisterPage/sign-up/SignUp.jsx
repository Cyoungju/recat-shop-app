import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from '../../../components/form/Form'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase';
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/user/user.slice';



export const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setfirebaseError] = useState("");
  const dispatch = useDispatch();
  
  const auth = getAuth(app);
  const handleSignuoAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user)=>{
      dispatch(setUser({
        email : userCredential.user.email,
        token : userCredential.user.refreshToken,
        id : userCredential.user.uid
      }))
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
