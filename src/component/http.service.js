import axios from 'axios';
import { apiEndpoints } from './../config/api.endpoints';

function getData( url ){
    return axios.get( apiEndpoints.hostname + url, { timeout: 30*1000 } );
}

export {
    getData,
}