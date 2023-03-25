import axios from 'axios';

export const API = 'https://63d3e856a93a149755b5c8f1.mockapi.io/';

let axiosInstance = axios.create({
	baseURL: API,
	timeout: 10000, //1000ms
});

// catch error
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return error;
	}
);

// axiosInstance.interceptors.request.use(
// 	(request) => {
// 		request.headers.Authorization = `Bearer ${sessionStorage.getItem(
// 			'token'
// 		)}`;
// 		return request;
// 	},
// 	(error) => {
// 		return error;
// 	}
// );

export default axiosInstance;
