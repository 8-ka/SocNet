import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { authReducers } from "../../data/auth_container";
import './styles.css'

const LoginPage = (props) => {
  const { setLogIn, isAuth } = props;

  const onSubmit = (formData) => {
    const { email, password, remember } = formData;
    setLogIn(email, password, remember);
  }

  if(isAuth) {
    return <Navigate to='/profile' />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const LoginForm = (props) => {
  const { handleSubmit, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className='error'>{error}</div>}
      <div>
        <Field placeholder="email" component='input' name="email" />
      </div>
      <div>
        <Field placeholder="password" component='input' type='password' name="password"/>
      </div>
      <div>
        <Field component='input' type='checkbox' name="remember"/>remember me
      </div>
      <div>
        <button>{'submit'}</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'loginForm',
})(LoginForm)

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogIn: (email, password, remember) => {
      dispatch(authReducers.setLogInThunkCreator(email, password, remember));
    },
    setLogOut: () => {
      dispatch(authReducers.setLogOutThunkCreator());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
