import React, { Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import add from '../../Assets/icon/adduser.jpg';
import BookServices from '../../Service/BookService';
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import logout from '../../Assets/Logout.jfif';

class Home extends Component {
    /*============================================================================================ */
    
    constructor(props) {
        super(props);
        this.state = {
            addressbook: [],
            allconatctArray: []
        };
    }

    componentDidMount() {
        this.fetchData();
        // console.log(this.props)
    }

	fetchData = () => {
        BookServices.getAll().then((response) => {
            this.setState({ 
                addressbook: response.data.contactData,
                allconatctArray:response.data.contactData
            });
            console.log(this.state.addressbook);
            console.log(response);
        })
        .catch((err) => {
          toast.error("Something went wrong, while getting all the records", err);
          console.log(err)
        });
    };

    sortByCity() {
        BookServices.sortByCity().then((response) => {
            this.setState({ addressbook: response.data.contactData });
        });
    }
    sortByState() {
        BookServices.sortByState().then((response) => {
            this.setState({ addressbook: response.data.contactData });
        });
    }

    delete = (employeeId) => {   
        var answer = window.confirm("Data once deleted cannot be restored!! Do you wish to continue ?");
        if(answer === true){
          BookServices.deletePerson(employeeId)
            alert("Data deleted successfully!!");
            window.location.reload();
            this.fetchData();
        }
        else{
          window.location.reload();
        }
  };

    /*============================================================================================ */
    render() {
  return (
    <div>    
    <div className="main-content">
        <div className="header-content">
            <div className="person-detail-text">
                Person Details
            </div>
            <Link to="/login">
                <img width='60' height='60' src={logout} alt='/'/></Link>
            <Link to="/form">
                <img width='50' height='50' src={add} alt='/'/></Link>
        </div>
    
    <table id="table-display" className="table">
    <thead><tr>            
            <th scope="col" >Name</th>
            <th scope="col" >Contact</th>
            <th scope="col" >Address</th>
            <th scope="col" onClick={()=> this.sortByCity()}>City</th>
            <th scope="col" onClick={()=> this.sortByState()}>State</th>
            <th scope="col" >Zip</th>
            <th scope="col" >Action</th>
        </tr></thead>
        <tbody>
            {this.state.addressbook && this.state.addressbook.map((book,index) => (
                        <tr key={`${index}`}>                             
                            <td>{book.name}</td>
                            <td>{book.mobileNumber}</td>
							<td>{book.address}</td>
							<td>{book.city}</td>
                            <td>{book.state}</td>
                            <td>{book.pinCode}</td>
                            <td><NavLink to={`/AddressBookForm/${book.id}`}><button>Edit</button></NavLink>
                            <button onClick={() => this.delete(book.id)} >Delete</button></td>
                        </tr>
    ))}
                </tbody>       
            </table>

        </div>
    </div>
  )}
}
export default Home;