import React from 'react'
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss'

const Form = ({title, getDataForm, firebaseError}) => {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode : 'onChange'
  });

  const onSubmit = ({email, password})=>{
    console.log(email, password);
    getDataForm(email, password);
    reset();
  }

  // 유효성검사 - 정규식
  const userEmail = {
    required : "필수 필드 입니다.",
    pattern : {
      value : /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
      message : "입력하신 이메일 주소가 올바르지 않습니다."

    }
  }
  const userPassword = {
    required : "필수 필드 입니다.",
    minLength :{
      value:6,
      message : "최소 6자 입니다."
    },
    maxLength :{
      value:13,
      message : "최대 13자 입니다."
    },
    pattern : {
      value : /^[A-Za-z0-9]{8,20}$/,
      message : "최소 8자, 영문 1자, 숫자 1자"
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input type="email" placeholder='E-mail' 
          {...register("email", userEmail)}
        />
        {errors?.email &&
          <div>
            <span className={styles.form_error}>
              {errors.email.message}
            </span>
          </div>
        }
      </div>
      
           

      <div>
        <input type="password" placeholder='password'
          {...register("password", userPassword)}
        />
      </div>
      <div>
      
      {errors?.password &&
          <div>
            <span className={styles.form_error}>
              {errors.password.message}
            </span>
          </div>
        }

      </div>
      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
      
    </form>
  )
}

export default Form