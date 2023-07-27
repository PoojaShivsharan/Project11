import axios from 'axios';
import { AUTH_API_URL } from '../component/constant/environment';

const mobileSignup = (payload) => {
    const url = `${AUTH_API_URL}Api/User/GetToken`;
    return axios.post(url, payload);
}
export default {
    mobileSignup,
}
