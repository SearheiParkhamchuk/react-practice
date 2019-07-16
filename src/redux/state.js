const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
    _state: {
        profile: {
            posts: [
                {
                    avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                    title: "Post 1",
                    id: 1
                },
                {
                    avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                    title: "Post 2",
                    id: 2
                },
                {
                    avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                    title: "Post 3",
                    id: 3
                },
            ],
            newPostText: 'ololl'
        },
        dialogs: {
            users: [
                { name: 'Siarhei', id: 1},
                { name: 'Masha', id: 2},
                { name: 'Ivan', id: 3},
                { name: 'Petya', id: 4},
                { name: 'Marta', id: 5},
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'How are u doing?' },
                { id: 4, message: 'I\'m ok' }
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    _addPost() {
        this._state.profile.posts.push(
            {
                id: Math.random() * 100,
                avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                title: this._state.profile.newPostText
            })
            this._state.profile.newPostText = '';
            this._callSubscriber(this);
    },
    _updateNewPostText(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this);
    },
    _updateNewMessageBody(text) {
        this._state.dialogs.newMessageBody = text;
        this._callSubscriber(this);
    },
    _sendMessage() {
        this._state.dialogs.messages.push({
            id: Math.random() * 100,
            message: this._state.dialogs.newMessageBody
        });
        this._state.dialogs.newMessageBody = '';
        this._callSubscriber(this);
    },
    dispatch(action) {
        switch(action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.text);
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._updateNewMessageBody(action.text);
                break;
            case SEND_MESSAGE:
                this._sendMessage();
                break;
            default:
                console.warn("Type is nessesary")
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});
export const updateNewMessageBodyActionCreator = text => ({type: UPDATE_NEW_MESSAGE_BODY, text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default store;