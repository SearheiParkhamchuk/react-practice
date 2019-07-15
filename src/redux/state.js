

const state = {
    profile: {
        posts: [
            {
                avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                title: "Post 1"
            },
            {
                avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                title: "Post 2"
            },
            {
                avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
                title: "Post 3"
            },
        ]
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
}

export default state;