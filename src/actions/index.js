import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_USER = 'fetch_user';

const ROOT_URL = 'https://api.github.com';

export function fetchUsers(since = 0) {
    const request = axios.get(`${ROOT_URL}/users?per_page=50&since=${since}`);

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function fetchUser(login) {
    const request = axios.get(`${ROOT_URL}/users/${login}`);

    return {
        type: FETCH_USER,
        payload: request
    }
}