import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';
import {
	APIResponse
} from './types'; 

// const baseURL = 'https://api.gopax.co.kr'; 
const baseURL = '/send';
const gopaxAxios: AxiosInstance = axios.create({
	baseURL
})

const request = async<T>(config:AxiosRequestConfig): Promise<APIResponse<T>> => {
	try{
		const { data } = await gopaxAxios.request(config);
		return [undefined, data]; 
	} catch(error) {
		return [error, undefined]; 
	}
}

const GET = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request({
		...config, 
		method: 'GET', 
		url, 
		params 
	}); 

export const http = { GET }; 