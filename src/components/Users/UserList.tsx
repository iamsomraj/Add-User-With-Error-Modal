import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

type UserType = {
  id: string;
  username: string;
  age: string;
};

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
