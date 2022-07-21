import { Routes, Route } from "react-router-dom";
import Form from './Components/Address-Book-Form/AddressBookForm';
import Home from './Components/Address-Book-Home/AddressBookHome';
import Header from './Header';
import Login from './Components/Login/login';
import Registration from "./Components/Registration/registration";

function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
            <Route path="/home" element={ <Home/>} />
            <Route path="/form" element={ <Form/>} />
            <Route exact path="/AddressBookForm/:id" element={ <Form/>} />
            <Route path="" element ={ <Login/> } />
            <Route path="/login" element= { <Login/> } />
            <Route path="/register" element= { <Registration/> } />
          </Routes>       
    </div>
  );
}

export default App;