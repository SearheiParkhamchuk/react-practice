import React from 'react';
import { follwActionCreator, unFollwActionCreator, setUsersActionCreator, totalCountActionCreator, currentPageActionCreator, fetchingActionCreator } from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import { Preloader } from '../Common/Preloader/preloader';

class UsersContainerAPI extends React.Component {
    debugger;
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(data => {
            this.props.setUsers(data.data.items);
            this.props.setTotalCount(data.data.totalCount);
        })
        .catch(e => console.log(e))
        .finally(() => this.props.setFetching(false))
    }

    getUsers = pageNumber => {
        this.props.setCurrentPge(pageNumber);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(data => this.props.setUsers(data.data.items))
            .catch(e => console.log(e))
            .finally(() => this.props.setFetching(false))
    }

    render()  {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                getUsers={this.getUsers.bind(this)}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </> }
}

const mapState = state => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
});

const mapDispatch = {
    follow: follwActionCreator,
    unFollow: unFollwActionCreator,
    setUsers: setUsersActionCreator,
    setTotalCount: totalCountActionCreator,
    setCurrentPge: currentPageActionCreator,
    setFetching: fetchingActionCreator
};

const UsersContainer = connect(mapState, mapDispatch)(UsersContainerAPI);

export default UsersContainer;