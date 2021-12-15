import axios from 'axios'

const base_url = 'http://mydomain.com:3000/api/'
const base_url_dev = 'https://reportitws.herokuapp.com/api/';

export const get: any = (ePoint: string, params?: any): Promise<any> => {
    return axios.get(base_url_dev + ePoint);
}

export const post = (ePoint: string, data: any, params?: any): Promise<any> => {
    return axios.post(base_url_dev + ePoint, data)
}
