import React from 'react';
import style from './users.module.css'
import { NavLink } from 'react-router-dom';

export const Users = props => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    const pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            <div>
                {
                    pages.map(pageNumber =>
                        <span onClick={ () => props.getUsers(pageNumber) } className={ (props.currentPage === pageNumber ? style.selectedPage : '') + ' ' + style.pagination_gap }>{pageNumber}</span>)
                }
            </div>
            {
                props.users.map(user => {
                    const isInProgress = props.followingInProgress.some(id => id === user.id);
                    return <div key={ user.id }>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small || 'https://image.flaticon.com/icons/png/512/194/194938.png'} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            { user.followed ?
                                <button
                                    style={isInProgress ? { color: '#d6dfe2' } : { color: '#6f7577' }} disabled={isInProgress}
                                    onClick={ () => props.userUnFollow(user.id)
                                }>Unfollow</button> :
                                <button
                                    style={isInProgress ? { color: '#d6dfe2' } : { color: '#6f7577' }} disabled={isInProgress}
                                    onClick={ () => props.userFollow(user.id)
                                }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ user.name }</div>
                            <div>{ user.status || 'unknown' }</div>
                        </span>
                        <span>
                            <div>{ user.country || 'unknown' }</div>
                            <div>{ user.city || 'unknown' }</div>
                        </span>
                    </span>
                </div>
                })
            }
        </div>
}

export default Users;