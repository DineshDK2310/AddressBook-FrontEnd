import axios from "axios";

class BookService{
    baseUrl ="http://localhost:8090/addressbook"

    addPerson(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }

    getAll() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

    getPersonById(personId) {
        return axios.get(`${this.baseUrl}/get/${personId}`);
      }

    updatePerson(personId,data) {
        return axios.put(`${this.baseUrl}/put/${personId}`, data);
      }

    deletePerson(personId) {
        return axios.delete(`${this.baseUrl}/delete/${personId}`);
      }
    sortByCity() {
        return axios.get(`${this.baseUrl}/sortcity`);
      }
    sortByState() {
        return axios.get(`${this.baseUrl}/sortstate`);
      }
}

export default new BookService();