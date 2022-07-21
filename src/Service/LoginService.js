import axios from "axios";

class LoginService{
    baseUrl= 'http://localhost:8090/addressbook/login'

    checkLogin(data){
        return axios.post(`${this.baseUrl}`, data)
    }

}

export default new LoginService();