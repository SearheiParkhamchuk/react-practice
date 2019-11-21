import React from 'react';
import { reduxForm, Field } from 'redux-form';

export const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={'input'} placeholder={'Login'}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} type="password" placeholder={'Password'}/>
            </div>
            <div>
                <label>
                    <Field name={'rememberMe'} component={'input'} type="checkbox"/>
                    <span>Remember me</span>
                </label>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div></div>
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export const Login = props => {
    const onSubmit = formData => {
        
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
    </div>
}

export default Login;