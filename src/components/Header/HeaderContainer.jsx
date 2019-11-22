import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header { ...this.props } />
    }
}

const mapState = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
});

const mapDispatch = { logout }

export default connect(mapState, mapDispatch)(HeaderContainer);