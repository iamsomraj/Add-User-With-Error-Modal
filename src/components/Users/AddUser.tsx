import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

type AddUserProps = {
  onAddUser: (username: string, age: string) => void;
};

const AddUser: React.FC<AddUserProps> = (props) => {
  const initialState = {
    username: "",
    age: "",
  };
  const initialError = {
    title: "",
    message: "",
  };

  const [userInput, setUserInput] = useState(initialState);
  const [error, setError] = useState(initialError);

  const clearUserInput = () => {
    setUserInput(initialState);
  };

  const addUserHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username or age ( non-empty values )",
      });
      return;
    }
    if (parseFloat(userInput.age) < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( greater than 1 )",
      });
      return;
    }

    props.onAddUser(userInput.username, userInput.age);
    clearUserInput();
  };

  const errorHandler = () => {
    setError(initialError);
  };

  return (
    <div>
      {error.title.trim().length !== 0 && error.message.trim().length !== 0 && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userInput.username}
            onChange={(e) =>
              setUserInput((prevUserInput) => ({
                ...prevUserInput,
                username: e.target.value,
              }))
            }
          />
          <label htmlFor="age">Age in years</label>
          <input
            type="number"
            id="age"
            value={userInput.age}
            onChange={(e) =>
              setUserInput((prevUserInput) => ({
                ...prevUserInput,
                age: e.target.value,
              }))
            }
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
