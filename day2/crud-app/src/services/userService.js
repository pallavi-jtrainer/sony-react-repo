import http from "../http-common"

export function getAllUsers() {
    return http.get(`/users`)
    //.then((res) => res.data);
}

export function registerNewUser(user) {
    return http.post(`/users`,
        {
            body: user
        }
    )
}

export function getUserDetails(id) {
    return http.get(`/users/${id}`)
}

export const updateUser = (id, user) => {
    return http.put(`/users/${id}`, user);
}

export const deleteUser = (id) => {
    http.delete(`/users/${id}`)
}