import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId || 2}`)
        .then(response => {
            this.props.setUserProfile(response.data);
        })
        .catch(e => console.log(e))
        .finally(() => {})
    }

    render() {
        return <Profile { ...this.props } profile={this.props.profile} />
    }
}

const mapState = state => ({
    profile: state.profile.userProfile
});

const mapDispatch = {
    setUserProfile
};

const withURLProfileContainer = withRouter(ProfileContainer);

export default connect(mapState, mapDispatch)(withURLProfileContainer);