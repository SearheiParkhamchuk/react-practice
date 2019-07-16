const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                { message: 'Hi' },
                { message: 'Hello' },
                { message: 'How are u doing?' },
                { message: 'I\'m ok' }
            ]
        }
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    addPost() {
        this._state.profile.posts.push(
            {
                id: Math.random() * 100,
                avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                title: this._state.profile.newPostText
            })
            this._state.profile.newPostText = '';
            this._callSubscriber(this);
    },
    updateNewPostText(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this);
    },
    dispatch(action) {
        switch(action.type) {
            case ADD_POST:
                this.addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this.updateNewPostText(action.text);
                break;
            default:
                console.warn("Type is nessesary")
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});

export default store;