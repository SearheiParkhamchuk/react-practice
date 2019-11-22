import * as axios from 'axios';

const axiosSocial = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8db5e338-cc95-413a-a1fc-b3045acfd180'
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
    login(email, password, rememberMe = false) {
        return axiosSocial.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
            .catch(e => {throw e});
    },

    logout() {
        return axiosSocial.delete(`auth/login`)
            .then(response => response.data)
            .catch(e => {throw e});
    }
}