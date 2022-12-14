import React from 'react';
import {Button, Form} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"
import {toast} from "react-toastify"
import {loginApi} from "../../../api/user"
import {useAuth} from "../../../hooks"
import "./LoginForm.scss"

export function LoginForm() {
  const {login} = useAuth();
  //console.log(useAuth());
  const fromik =useFormik ({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue)=>{
      try {
        const response = await loginApi(formValue);
        const {access} = response;
        login(access)
        //console.log(access);
      } catch (error) {
       
        toast.error(error.message);
      }
    }
  })
  return (
    <Form className='login-form-admin' onSubmit={fromik.handleSubmit}>
      <Form.Input 
      name = "email" 
      placeholder="Correo electronico" 
      value = {fromik.values.email} 
      onChange= {fromik.handleChange}
      error={fromik.errors.email}
      />
      <Form.Input 
      name = "password" 
      type='password' 
      placeholder = "Contraseña" 
      value = {fromik.values.password}
      onChange= {fromik.handleChange}
      error={fromik.errors.password}
      />
      <Button 
      type='submit' 
      content="Iniciar sessión" 
      primary fluid />
    </Form>
  )
}

function initialValues(){
  return {
    email :"",
    password: ""
  };
}

function validationSchema() {
  return {
    email: Yup.string().email("Se requiere Correo correcto").required("Se requiere Correo"),
    password: Yup.string().required("Se requiere contraserña"),
  };
}