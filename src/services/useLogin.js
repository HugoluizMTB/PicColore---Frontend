import api from "../config/api";
const pathLogin = "v1"


function useLogin() {
    async function postLogin(userCredentials) {
        try {
            const response = await api.post("login-user", userCredentials)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default useLogin;
