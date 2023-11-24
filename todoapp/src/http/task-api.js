import api  from "./api";

const resources = "/tasks"

export const allTasks = () => api.get(resources)

export const createTask = task => api.post(resources, task)

export const updateTask = (id, task) => api.put(`${resources}/{$id}`, task)

export const removeTask = id => api.delete(`${resources}/{$id}`)

export const isCompleteTask = (id, task) => api.put(`${resources}/{$id}/complete`, task)
