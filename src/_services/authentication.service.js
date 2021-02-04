import {BehaviorSubject} from 'rxjs';

import axios from "axios";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};

function login(login, password) {
    return axios.post(`/auth/login`, {
        userLogin: login,
        userPassword: password
    }).then(handleResponse => {
        let user = handleResponse.data;
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);

        window.location = '/'
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    window.location = '/'
}
