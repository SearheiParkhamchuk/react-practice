import React, { useState, useEffect } from 'react';

const ProfileStatusHook = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => setStatus(props.status), [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (e) => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const changeLocalStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (<div>
            {
                !editMode ?
                <div>
                    <span
                        style={{ display: 'inline-block', minWidth: '100px', height: '20px', background: 'rgba(0,0,0,0.2)' }}
                        onDoubleClick={ activateEditMode }>{ props.status }
                    </span>
                </div> :
                <div>
                    <input
                        autoFocus={true}
                        onBlur={ deactivateEditMode }
                        onChange={ changeLocalStatus }
                        value={ status }
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusHook;