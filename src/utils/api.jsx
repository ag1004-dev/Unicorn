import axios from 'axios'
import aes from 'crypto-js/aes';

const BACKEND_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1`
const AES_KEY = `${process.env.NEXT_PUBLIC_AES_KEY}`

export default {
    async baseApi(subUrl, method, jsonData) {
        const request = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${BACKEND_BASE_URL + subUrl}`,
            data: jsonData,
        };

        const auth = JSON.parse(localStorage.getItem(`${process.env.NEXT_PUBLIC_LS_KEY}`));
        if(!auth) {
            throw new Error("login first!")
        }

        const { accessToken } = auth
        request.headers["Authorization"] = aes.encrypt(accessToken, AES_KEY).toString()        
        let response = await axios(request)

        return response.data
    },
    async baseApiWithoutAuth(subUrl, method, jsonData) {
        const request = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${BACKEND_BASE_URL + subUrl}`,
            data: jsonData,
        };

        let response = await axios(request)

        return response.data
    },
    async getUser() {
        const result = await this.baseApi(`/end-users/getUserDetail`, 'GET', {})

        return result
    },
    async updateUser(data) {
        const result = await this.baseApi(`/end-users/updateMe`, 'POST', data)

        return result
    },
    async getGameNfts(userId) {
        const result = await this.baseApi(`/end-users/getGameNfts`, 'POST', {userId})

        return result
    },
    async addGameNft(data) {
        const result = await this.baseApi(`/end-users/addGameNft`, 'POST', data)
    
        return result
    },
    async removeGameNft(data) {
        const result = await this.baseApi(`/end-users/removeGameNft`, 'POST', data)
        
        return result
    },
    async addNewWallet(data) {
        const result = await this.baseApi(`/end-users/addWallet`, 'POST', data)
    
        return result
    },
    async removeWallet(data) {
        const result = await this.baseApi(`/end-users/removeWallet`, 'POST', data)
    
        return result
    },
    async getNetworks() {
        const result = await this.baseApiWithoutAuth(`/networks`, 'GET', {})
    
        return result.data.map(o=>{
            return {
                ...o.attributes,
                id: o.id
            }
        })
    },
    async requestNonce(data) {
        const result = await this.baseApiWithoutAuth(`/end-users/requestNonce`, 'POST', data)
    
        return result
    },
    async auth(data) {
        const result = await this.baseApiWithoutAuth(`/end-users/auth`, 'POST', data)
    
        return result
    },
    async checkPasswordFromEmail(data) {
        const result = await this.baseApiWithoutAuth(`/end-users/checkPasswordFromEmail`, 'POST', data)
    
        return result
    },
    async getPolicies() {
        const result = await this.baseApiWithoutAuth(`/policies`, 'GET', {})
    
        return result
    },
    async changePassword(data) {
        const result = await this.baseApi(`/end-users/changePassword`, 'POST', data)
        
        return result
    },
    async verify(data) {
        const result = await this.baseApiWithoutAuth(`/end-users/verify`, 'POST', data)
    
        return result
    },
    async updateUserFromWeb3Auth(data) {
        const result = await this.baseApi(`/end-users/updateUserFromWeb3Auth`, 'POST', data)
    
        return result
    },
    async forgotPassword(email) {
        const result = await this.baseApiWithoutAuth(`/end-users/requestResetPassword`, 'POST', {email})
        return result
    },
    async checkValidResetPasswordToken(token) {
        const result = await this.baseApiWithoutAuth(`/end-users/checkValidResetPasswordToken`, 'POST', {token})
        return result
    },
    async resetPassword(token, password) {
        const result = await this.baseApiWithoutAuth(`/end-users/resetPassword`, 'POST', { token, password })
        return result
    },

    //two step verification
    async deleteTwostepNumber() {
        const result = await this.baseApi(`/end-users/deleteTwostepNumber`, 'POST', {})
    
        return result
    },
    async setTwostepNumber(mobileNumber) {
        const result = await this.baseApi(`/end-users/setTwostepNumber`, 'POST', {mobileNumber})
    
        return result
    },
    async verifyPhoneNumber(phoneNumber) {
        const result = await this.baseApi(`/end-users/verifyPhoneNumber`, 'POST', {phoneNumber})
    
        return result
    },
    async verifyPhoneNumberCode(code) {
        const result = await this.baseApi(`/end-users/verifyPhoneNumberCode`, 'POST', {code})
    
        return result
    },
    async setTwostepStatus(status) {
        const result = await this.baseApi(`/end-users/setTwostepStatus`, 'POST', {status})
    
        return result
    },
    async checkUserName(displayname) {
        const result = await this.baseApi(`/end-users/checkUserName`, 'POST', {displayname})
    
        return result
    },
    async resendTwoStepCode(resendToken) {
        const result = await this.baseApiWithoutAuth(`/end-users/resendTwostepCode`, 'POST', {resendToken})
    
        return result
    },
    async verifyTwoStepCode(code, resendToken) {
        const result = await this.baseApiWithoutAuth(`/end-users/verifyTwostep`, 'POST', {code, resendToken})
    
        return result
    },
    async verifyEmailToken(token) {
        const result = await this.baseApiWithoutAuth(`/end-users/email-verify?token=${token}`, 'GET', {})
    
        return result
    },
    async verifyEmailToken(token) {
        const result = await this.baseApiWithoutAuth(`/end-users/email-verify?token=${token}`, 'GET', {})
    
        return result
    },
    async getCollectible(id) {
        const result = await this.baseApi(`/end-users/collectibles/${id}`, 'GET', {})

        return result
    },
    async completeClaim(id) {
        const result = await this.baseApi(`/end-users/collectibles/${id}/completeClaim`, 'POST', {})

        return result
    },
    // async getCollectibles(data) {
    //     const result = await this.baseApi(`/end-users/collectibles/`, 'POST', data)

    //     return result
    // },
    async getMyCollectibles(cb) {
        const result = await this.baseApi(`/end-users/collectibles/me`, 'GET', {})
            .then((res) => {
                cb(null, res)
            })
            .catch((error)=> {
                cb(error, null)
        });
    },
    async getCollectibles(data,cb)  {
        await this.baseApi('/end-users/collectibles/', 'POST', data)
            .then((res) => {
                cb(null, res)
            })
            .catch((error)=> {
                cb(error, null)
        });
    },
    async createStripePaymentIndentUsingGooglePay(data) {
        const result = await this.baseApi(`/end-users/createStripePaymentIndentUsingGooglePay`, 'POST', data)

        return result
    },
    async chargeStripe(data) {
        const result = await this.baseApi(`/end-users/chargeStripe`, 'POST', data)

        return result
    },
}