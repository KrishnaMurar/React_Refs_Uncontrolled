import React, { useState } from 'react';
import "./App.css";
import LoginPage from "./Components/Users/LoginPage";
import UsersList from './Components/Users/UsersList';


function App() {
  const [UserList, setUsersList] = useState([]);


  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });

    
  }
  return (
    <div className="App">
      <LoginPage onAddUser = {addUserHandler} ></LoginPage>
      <UsersList users = {UserList} />
      
    </div>
  );
}

export default App;
