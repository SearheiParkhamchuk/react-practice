import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";


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
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._callSubscriber(this);
    }
};

export default store;