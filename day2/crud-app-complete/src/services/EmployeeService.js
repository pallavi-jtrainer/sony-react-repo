import HttpCommon from "../HttpCommon"

export const listEmployees = () => {
    return HttpCommon.get(`/employees`)
}


export const getEmployeeDetails = (id) => {
    return HttpCommon.get(`/employees/${id}`);
}

export const createEmployee = (data) => {
    return HttpCommon.post(`/employees`, data);
}

export const updateEmployee = (id, data) => {
    return HttpCommon.put(`/employees/${id}`, data);
}

export const deleteEmployee = (id) => {
    return HttpCommon.delete(`/employees/${id}`);
}





