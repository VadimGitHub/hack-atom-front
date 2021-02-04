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

function login(username, password) {
    return axios.post(`/users/authenticate`, {
        username,
        password
    }).then(handleResponse => {
        let user = handleResponse.data.user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);

        return user;
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
