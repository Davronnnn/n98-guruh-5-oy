import axiosInstance from './axiosInstance';

export const getProducts = () => axiosInstance.get('products');

export const updateProducts = (data) => axiosInstance.post('products',data);
