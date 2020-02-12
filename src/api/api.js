import * as axios from 'axios';

const axiosSocial = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '18a54f1c-c761-4fb6-a75a-e6b04e8fd2a6'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosSocial.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data)
            .catch(e => {throw e});
    },

    getMyself() {
        return axiosSocial.get('auth/me')
            .then(response => response.data)
            .catch(e => {throw e});
    }
}

export const profileAPI = {
    getProfileById(userId) {
        return axiosSocial.get(`profile/${userId}`)
            .then(response => response.data)
            .catch(e => {throw e});
    },

    getStaus(userId) {
        return axiosSocial.get(`profile/status/${userId}`)
            .then(response => response.data)
            .catch(e => {throw e});
    },

    updateStaus(status) {
        return axiosSocial.put(`profile/status`, { status })
            .then(response => response.data)
            .catch(e => {throw e});
    },

    async savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        const response = await axiosSocial.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
}

export const followAPI = {
    follow(userId) {
        return axiosSocial.post(`follow/${userId}`, )
            .then(response => response.data)
            .catch(e => {throw e});
    },

    unFollow(userId) {
        return axiosSocial.delete(`follow/${userId}`, )
            .then(response => response.data)
            .catch(e => {throw e});
    },
}

export const authAPI = {
    login(payload) {
        return axiosSocial.post(`auth/login`, payload)
            .then(response => response.data)
            .catch(e => {throw e});
    },

    logout() {
        return axiosSocial.delete(`auth/login`)
            .then(response => response.data)
            .catch(e => {throw e});
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return axiosSocial.get('security/get-captcha-url')
            .then(response => response.data)
            .catch(e => {throw e});
    },
}