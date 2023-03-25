import axiosInstance from './axiosInstance';

export const getCategories = () => axiosInstance.get('categories');

export const updateCategories = () => axiosInstance.post('categories');
