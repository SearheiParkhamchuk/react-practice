import React from 'react';
import { follwActionCreator, unFollwActionCreator, setUsersActionCreator } from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';

const mapState = state => ({ users: state.users.users });

const mapDispatch = dispatch => {
    return {
        follow: userId => dispatch(follwActionCreator(userId)),
        unFollow: userId => dispatch(unFollwActionCreator(userId)),
        setUsers: users => dispatch(setUsersActionCreator(users))
    }
};

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;