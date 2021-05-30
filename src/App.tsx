import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const initialUsers = [{ id: "u1", username: "Somraj", age: "23" }];
  const [users, setUsers] = useState(initialUsers);

  const addUserHandler = (username: string, age: string) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: Math.random().toString(), username, age }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
