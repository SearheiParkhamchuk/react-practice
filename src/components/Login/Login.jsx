import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/Forms/Forms';
import { requiredField } from '../../helpers/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';

export const LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    component={Input}
                    placeholder={'Email'}
                    validate={[ requiredField ]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={Input}
                    type="password"
                    placeholder={'Password'}
                    validate={[ requiredField ]}
                />
            </div>
            <div>
                <label>
                    <Field name={'rememberMe'} component={'input'} type="checkbox"/>
                    <span>Remember me</span>
                </label>
            </div>
            {
                props.error && <div>
                    <span style={{ color: 'red' }}>{props.error}</span>
                </div>
            }
            <div>
                <button>Login</button>
            </div>
            <div></div>
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export const Login = props => {
    const onSubmit = formData => {
         const {email, password, rememberMe} = formData;
         props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
    </div>
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth})

export default connect(mapStateToProps, { login })(Login);