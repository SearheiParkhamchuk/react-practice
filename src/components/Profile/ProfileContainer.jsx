import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirectComponent } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    _refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserProfileId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this._refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this._refreshProfile();
        }
    }

    render() {
        return <Profile
            { ...this.props }
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
            savePhoto={this.props.savePhoto}
        />
    }
}

const mapState = state => ({
    profile: state.profile.userProfile,
    status: state.profile.status,
    currentUserProfileId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const mapDispatch = {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto
};

export default compose(
    connect(mapState, mapDispatch),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer);