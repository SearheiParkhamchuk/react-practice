import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({ editMode: true });
    }

    deactivateEditMode(e) {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    }

    changeLocalStatus(e) {
        this.setState({ status: e.currentTarget.value });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode ?
                    <div>
                        <span
                            style={{ display: 'inline-block', minWidth: '100px', height: '20px', background: 'rgba(0,0,0,0.2)' }}
                            onDoubleClick={ this.activateEditMode.bind(this) }>{ this.props.status }</span>
                    </div> :
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={ this.deactivateEditMode.bind(this) }
                            onChange={ this.changeLocalStatus.bind(this) }
                            value={ this.state.status }
                        />
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;