import axios from "axios"

class RegistrationService{
    baseUrl = "http://localhost:8090/registration"

    getAllUsers(){
        return axios.get(`${this.baseUrl}/getallusers`);
    }

    addUser(data){
        return axios.post(`${this.baseUrl}/adduser`, data);
    }

    updateUser(id, data){
        return axios.put(`${this.baseUrl}/update/${id}`, data);
    }

    deleteUser(id){
        return axios.delete(`${this.baseUrl}/deleteuser/${id}`);
    }
}

export default new RegistrationService();