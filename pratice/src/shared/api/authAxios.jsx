import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../redux/Store';
import { isValidToken } from '../shared/constants/auth-utilities';
import { AUTH_API_URL } from '../component/constant/environment';
import { AUTH_TYPE } from '../component/redux/action/authAction';

export let refreshTokenData = {
    isExecuting: false,
    promise: null,
};

export const updateRefreshTokenData = (isExecuting, promise) => {
    refreshTokenData = {
        isExecuting,
        promise
    }
}

const authAxiosInstance = axios.create();
const refreshSession = (accessToken) => setSession(accessToken);

export const setSession = async (accessToken, refreshToken) => {
    if (accessToken) {
        await AsyncStorage.setItem('accessToken', accessToken)
        if (refreshToken) {
            await AsyncStorage.setItem('refreshToken', refreshToken)
        }
        authAxiosInstance.defaults.headers["Authorization"] = `Bearer ${accessToken}`
    } else {
        await AsyncStorage.removeItem('accessToken')
        await AsyncStorage.removeItem('refreshToken')
        delete authAxiosInstance.defaults.headers["Authorization"]
    }
}


authAxiosInstance.interceptors.request.use(
    async (conf) => {
        const accessToken = await AsyncStorage.getItem('accessToken')
        if (
            !accessToken ||
            !isValidToken(accessToken)
        ) {
            const refreshToken = await AsyncStorage.getItem('refreshToken')
            if (
                !refreshToken ||
                !isValidToken(refreshToken)
            ) {
                updateRefreshTokenData(false, null);
                return Promise.reject("Unauthorized User");
            } else {
                try {
                    let refreshTokenPromise;
                    if (refreshTokenData?.isExecuting && refreshTokenData?.promise) {
                        refreshTokenPromise = refreshTokenData.promise;
                    } else {
                        refreshTokenPromise = axios.create().post(`${AUTH_API_URL}Api/User/GetToken`, { refreshToken: refreshToken });
                        updateRefreshTokenData(true, refreshTokenPromise);
                    }
                    const response = await refreshTokenPromise;
                    updateRefreshTokenData(false, null);
                    if (response?.data?.data?.accessToken) {
                        const { accessToken } = response?.data?.data;
                        refreshSession(accessToken);
                        conf.headers["Authorization"] = `Bearer ${accessToken}`
                    } else {
                        updateRefreshTokenData(false, null);
                        return Promise.reject("Unauthorized User");
                    }

                } catch (error) {
                    updateRefreshTokenData(false, null);
                    return Promise.reject(error);
                }
            }
        } else {
            if (accessToken) {
                conf.headers["Authorization"] = `Bearer ${accessToken}`;
            }
        }
        return conf;
    },
    (error) => {
        updateRefreshTokenData(false, null);
        return Promise.reject(error);
    }
);
authAxiosInstance.interceptors.response.use(undefined, function axix(err) {
    if (err && err.response && err.response?.status === 401) {
        Store.dispatch({ type: AUTH_TYPE.LOGOUT })
    }
    return err?.response;
})

export default authAxiosInstance;