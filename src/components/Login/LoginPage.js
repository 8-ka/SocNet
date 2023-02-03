import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { authReducers } from "../../data/auth_container";
import './styles.css'

// type TProps = {
//   setLogIn?: any,
//   isAuth?: boolean,
//   captchaUrl?: string | null,
//   handleSubmit?: (email: string, password: string, remember: boolean, captcha: string) => void,
//   error?: string,
// }

// type TFormData = {
//   email?: string,
//   password?: string,
//   remember?: boolean,
//   captcha?: string,
// }

const LoginPage = (props) => {
  const { setLogIn, isAuth, captchaUrl } = props;

  const onSubmit = (formData) => {
    const { email, password, remember, captcha } = formData;
    setLogIn(email, password, remember, captcha);
  }

  if (isAuth) {
    return <Navigate to='/profile' />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

const LoginForm = (props) => {
  const { handleSubmit, error, captchaUrl } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className='error'>{error}</div>}
      <div>
        <Field placeholder="email" component='input' name="email" />
      </div>
      <div>
        <Field placeholder="password" component='input' type='password' name="password" />
      </div>
      <div>
        <Field component='input' type='checkbox' name="remember" />remember me
      </div>
      <div>
        <button>{'submit'}</button>
      </div>
      {captchaUrl &&
        <div>
          <img src={captchaUrl} alt='captcha' />
          <Field component='input' name='captcha' />
        </div>}
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'loginForm',
})(LoginForm)

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isAuth: auth.isAuth,
    captchaUrl: auth.captchaUrl,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogIn: (email, password, remember, captcha) => {
      dispatch(authReducers.setLogInThunkCreator(email, password, remember, captcha));
    },
    setLogOut: () => {
      dispatch(authReducers.setLogOutThunkCreator());
    },
    getCaptchaUrl: () => {
      dispatch(authReducers.getCaptchaUrlThunkCreator());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
