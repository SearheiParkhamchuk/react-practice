import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class LoginContainerAPI extends React.Component {
    render()  {
        return <>
            <Login />
        </> }
}

const mapState = state => ({

});

const mapDispatch = {

};

const LoginContainer = connect(mapState, mapDispatch)(LoginContainerAPI);

export default LoginContainer;