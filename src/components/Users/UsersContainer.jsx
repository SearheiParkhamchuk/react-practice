import React from 'react';
import { userUnFollow, userFollow, getUsers } from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import { Preloader } from '../Common/Preloader/preloader';

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsers = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render()  {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                getUsers={this.getUsers}
                userFollow={this.props.userFollow}
                userUnFollow={this.props.userUnFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </> }
}

const mapState = state => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
});

const mapDispatch = {
    userUnFollow,
    userFollow,
    getUsers
};

const UsersContainer = connect(mapState, mapDispatch)(UsersContainerAPI);

export default UsersContainer;