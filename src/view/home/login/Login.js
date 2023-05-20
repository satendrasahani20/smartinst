import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import "../../../App.css"
import Logo from "../../../assets/images/logo.png"
import { useDispatch } from 'react-redux';
import { login } from '../../../service/action/auth';

const Login = () => {
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    setError,
    formState: { errors }
} = useForm();
const dispatch=useDispatch()
const navigate=useNavigate()
const loginNow=(data)=>{

  dispatch(login(navigate,data))
}
  return (
      <div className="pt-5 login-area">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="login-box">
                <a href="#" className='login-logo'><img src={Logo} alt="logo" /></a> <br /> <br />
              </div>
              <div className="card card-body">
                <form id="submitForm" action="#" method="post" data-parsley-validate=""
                  data-parsley-errors-messages-disabled="true" noValidate="" _lpchecked="1" onSubmit={handleSubmit(loginNow)}>
                  <div className="form-group required">
                    <label htmlFor="username"> Enter your Name / Email </label>
                    <input type="text" className="form-control text-lowercase" {
                      ...register("email", {
                        required: true
                      })
                    }
                    />
                  </div>
                  <div className="form-group required">
                    <label className="d-flex flex-row align-items-center" htmlFor="password"> Enter your
                      Password
                      <a className="ml-auto border-link small-xl" href="#"> Forget Password? </a> </label>
                    <input type="password" className="form-control" {
                      ...register("password", {
                        required: true
                      })
                    }
                    />
                  </div>
                  {/* <div className="form-group mt-4 mb-4">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="remember-me"
                        name="remember-me" data-parsley-multiple="remember-me" />
                      <label clss="custom-control-label" htmlFor="remember-me"> Remember me? </label>
                    </div>
                  </div> */}
                  <div className="form-group pt-1 mt-2">
                    <button className="btn btn-primary btn-block" type="submit"> Log In </button>
                  </div>
                </form>
                {/* <p className="small-xl pt-3 text-center">
                  <span className="text-muted"> Not a member? </span>
                  <a href="#"> Sign up </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login