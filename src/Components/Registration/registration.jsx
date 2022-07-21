import { Link, useNavigate } from 'react-router-dom';
import '../Registration/registration.css';
import RegistrationService from '../../Service/RegistrationService';

const Registration = (props) => {
    let navigate = useNavigate();

    const save = (event) => {
        event.preventDefault();
        let object = {
            userName: event.target.userName.value,
            emailID: event.target.emailID.value,
            password: event.target.password.value,
        }
        console.log(object);
            RegistrationService.addUser(object).then((reasponse) =>{
                    alert("Registration Successfully");
                    navigate(`/login`);
            })
    }
    return(
        <div className="loginPage">
            <div className="login_text">
                REGISTRATION PAGE
            </div>
            <div className="body">
                <form onSubmit={save}>
                    <div className="label">
                        <label>User Name</label>
                        </div>
                        <input id='userName' name="userName" type='text' className='input' placeholder="Enter Your Name"></input>                   
                    <div className="label">
                        <label>Email</label>
                        </div>
                        <input id='emailID' name="emailID" type='text' className='input' placeholder="Enter your Email"></input>                   
                    <div className="label">
                        <label>Password</label></div>
                        <input id='password' name="password" type='text' className='input' placeholder="Enter Your Password"></input> 
                        <br/>                  
                    <button className='button'>SignUp</button>
                    <Link to='/login'>
                        <button className='button'>Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Registration;