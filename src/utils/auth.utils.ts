import type { CredentialsLogin } from '@/interfaces/CredentialsLogin.interface';
import type { CredentialsSignup } from '@/interfaces/CredentialsSignup.interface';
import type { JwtToken } from '@/interfaces/JwtToken.interface';
import type { UserPublicData } from '@/interfaces/UserPublicData.interface';
import axiosInstance from '@/services/api';

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
