import React from 'react';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(data => {
            this.props.setUsers(data.data.items);
        })
        .catch(e => console.log(e))
    }

    render() {
        return <div>
            {
                this.props.users.map(user => <div key={ user.id }>
                    <span>
                        <div><img src={user.photos.small || 'https://image.flaticon.com/icons/png/512/194/194938.png'} alt="avatar"/></div>
                        <div>
                            { user.followed ?
                                <button onClick={ () => { this.props.unFollow(user.id) } }>Unfollow</button> :
                                <button onClick={ () => { this.props.follow(user.id) } }>Follow</button>
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
                </div>)
            }
        </div>
    }
}

export default Users;