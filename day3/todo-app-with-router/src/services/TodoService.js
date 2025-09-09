import { http } from "../HttpCommon";

export const getAllTodos = () => {
    return http.get(`/todos`);
}

export const getTodoById = (id) => {
    return http.get(`/todos/${id}`);
}

export const createTodo = (data) => {
    return http.post(`/todos`, data);
}

export const updateTodo = (id, data) => {
    return http.put(`/todos/${id}`, data);
}

export const deleteTodo = (id) => {
    return http.delete(`/todos/${id}`);
}