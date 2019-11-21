import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfile();
    }

    render() {
        return <Header { ...this.props } />
    }
}

const mapState = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
});

const mapDispatch = { getMyProfile }

export default connect(mapState, mapDispatch)(HeaderContainer);