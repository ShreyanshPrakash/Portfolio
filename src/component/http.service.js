import axios from 'axios';
import { apiEndpoints } from './../config/api.endpoints';

function getData( url ){
    return axios.get( apiEndpoints.hostname + url );
}

export {
    getData,
}