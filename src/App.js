import React, { useState, Fragment } from 'react';
import "./App.css";
import LoginPage from "./Components/Users/LoginPage";
import UsersList from './Components/Users/UsersList';


function App() {
  const [UserList, setUsersList] = useState([]);


  const addUserHandler = (uName, uAge, uCollege) =>{
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString(), college: uCollege}];
    });

    
  }
  return (
    <Fragment className="App">
      <LoginPage onAddUser = {addUserHandler} ></LoginPage>
      <UsersList users = {UserList} />
      
    </Fragment>
  );
}

export default App;
