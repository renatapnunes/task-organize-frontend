import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const http = {
  getTasks: async () => {
    try {
      const response = await api.get('/task');
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  createTask: async ({ task, status }) => {
    try {
      const response = await api.post('/task', { task, status });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  updateTask: async ({ _id, task, status, created }) => {
    try {
      const response = await api.put(`/task/${_id}`, { task, status, created });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  deleteTask: async ({ id }) => {
    try {
      const response = await api.delete(`/task/${id}`, {});
      return response.data;
    } catch (error) {
      return error;
    }
  },
  deleteAllTasks: async () => {
    try {
      const response = await api.delete('/task', {});
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default http;
