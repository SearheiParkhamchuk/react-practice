import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirectComponent } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 5217;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile
            { ...this.props }
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
        />
    }
}

const mapState = state => ({
    profile: state.profile.userProfile,
    status: state.profile.status,
    currentUserProfileId: state.auth.userId,
});

const mapDispatch = {
    getUserProfile,
    getUserStatus,
    updateUserStatus
};

export default compose(
    connect(mapState, mapDispatch),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer);