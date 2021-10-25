import Card from "../UI/Card";
import classes from './AddUser.module.css';

import Button from "../UI/Button";
import React, { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const userNameInput = useRef();
    const ageInput = useRef();
    const [error, setError] = useState('');

    const addUserhander = (event) => {
        event.preventDefault();
        const enteredName = userNameInput.current.value;
        const enteredAge = ageInput.current.value;

        if (!enteredName.trim().length || !enteredAge.trim().length) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser({ name: enteredName, age: enteredAge, id: Math.random() })
        userNameInput.current.value = '';
        ageInput.current.value = '';
    }

    const dismissErrorModalHandler = () => {
        setError('');
    }

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onDismiss={dismissErrorModalHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserhander}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={userNameInput} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref={ageInput} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddUser;