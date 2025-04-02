import "./Users.css";
import { useGetUsersQuery } from "../services/usersAPI";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul className="list-user">
      {/* <p>Data from the API</p> */}
      {data.map((user) => (
        <li className="list-item" key={user.id}>
          {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;
