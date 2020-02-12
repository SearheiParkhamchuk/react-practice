import React from 'react';
import { userUnFollow, userFollow, getRequestUsers } from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import { Preloader } from '../Common/Preloader/preloader';
import { getPageSize , getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from '../../redux/reducers/selectors/users-selectors';

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getRequestUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsers = pageNumber => {
        this.props.getRequestUsers(pageNumber, this.props.pageSize);
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

const mapStateToProps = state => ({
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
});

const mapDispatch = {
    userUnFollow,
    userFollow,
    getRequestUsers
};

const UsersContainer = connect(mapStateToProps, mapDispatch)(UsersContainerAPI);

export default UsersContainer;