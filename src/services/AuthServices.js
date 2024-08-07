class UserAuthentication {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://composed-visually-newt.ngrok-free.app/api/auth";
    }

    async registerUser(userData) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/register`,
                userData
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async authenticateUser(userDetail) {
        try {
            const response = await this.httpClient.post(`${this.baseUrl}/authenticate`, userDetail)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async refreshAuthToken(token) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/refreshtoken`,
                token
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async resetPassword(userEmail) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/reset`,
                userEmail
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async changePassword(newAuthDetails) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/changepassword`,
                newAuthDetails
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default UserAuthentication;
