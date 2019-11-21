import { sendMessageActionCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import React from 'react';
import { WithAuthRedirectComponent } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class DialogsContainerAPI extends React.Component {
    render() {
        return (<Dialogs {...this.props} />);
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: message => {
            dispatch(sendMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(DialogsContainerAPI);