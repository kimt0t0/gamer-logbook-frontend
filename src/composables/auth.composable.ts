import type { CredentialsLogin } from '@/interfaces/CredentialsLogin.interface';
import type { CredentialsSignup } from '@/interfaces/CredentialsSignup.interface';
import type { JwtToken } from '@/interfaces/JwtToken.interface';
import type { UserPublicData } from '@/interfaces/UserPublicData.interface';
import { useAuthStore } from '@/stores/auth.store';
import { loginUtil, signupUtil } from '@/utils/auth.utils';

export const useAuth = () => {
    const login = async (credentials: CredentialsLogin): Promise<void> => {
        try {
            const jwtToken: JwtToken | void = await loginUtil(credentials);
            if (jwtToken) useAuthStore().setAuth(jwtToken.access_token);
            else throw new Error('Could not return data on login attempt.');
        } catch (e) {
            console.error(`Could not login: ${e}`);
        }
    };

    const signup = async (credentials: CredentialsSignup): Promise<void> => {
        try {
            const userCreated: UserPublicData | void = await signupUtil(credentials);
            if (userCreated)
                login({
                    email: credentials.email,
                    password: credentials.password,
                });
            else throw new Error('Could not return data on signup attempt.');
        } catch (e) {
            console.error(`Could not signup: ${e}`);
        }
    };

    return {
        login,
        signup,
    };
};
