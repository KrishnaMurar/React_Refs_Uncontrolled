import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helper/Wrapper";
import classes from "./LaginPage.module.css";
import ErrorModal from "../UI/ErrorModule";

const LoginPage = (props) => {
  

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length ===0) {
      setError({
        title: "Invalid Details",
        message: "Please enter Valid Name and Age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter Age > 1",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge, enteredCollege);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';

   
  };
 
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            
            ref = {nameInputRef}
          />
           <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            
            ref = {collegeInputRef}
          />
          <label htmlFor="age">age</label>
          <input
            id="age"
            type="number"
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;
