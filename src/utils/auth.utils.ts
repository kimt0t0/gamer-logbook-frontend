import type { CredentialsLogin } from '@/interfaces/CredentialsLogin.interface';
import type { CredentialsSignup } from '@/interfaces/CredentialsSignup.interface';
import type { JwtToken } from '@/interfaces/JwtToken.interface';
import type { UserExtendedData } from '@/interfaces/UserExtendedData.interface';
import type { UserPublicData } from '@/interfaces/UserPublicData.interface';
import axiosInstance from '@/services/api';
import { jwtDecode } from 'jwt-decode';

export const loginUtil = async (credentials: CredentialsLogin): Promise<JwtToken | void> => {
    try {
        const jwtToken = await axiosInstance.post('/auth', credentials);
        return jwtToken.data;
    } catch (e) {
        console.error(`Oups, could not login due to error: ${e}`);
    }
};

export const signupUtil = async (credentials: CredentialsSignup): Promise<UserPublicData | void> => {
    try {
        const userCreated = await axiosInstance.post('/users', credentials);
        return userCreated.data;
    } catch (e) {
        console.error(`Oups, could not signup due to error: ${e}`);
    }
};

export const getUserAuthUtil = async (): Promise<UserExtendedData | undefined> => {
    try {
        const userToken = localStorage.getItem('authenticatedUser');
        if (!userToken) {
            throw new Error(`You cannot get user auth without a jwt token`);
        }
        const decodedToken: UserPublicData = jwtDecode<UserPublicData>(userToken);
        const user = await axiosInstance.get(`/users/${decodedToken.id}`);
        if (!user) {
            throw new Error(`User with id ${decodedToken} was not found in the database or could not be loaded correctly.`);
        }
        return user.data;
    } catch (e) {
        console.error(`Could not load user data with authentification token ${localStorage.getItem('authenticatedUser')}: ${e}`);
    }
};
