import "./Users.css";
import {
  useDeleteUserMutation,
  // useGetUserbyIDQuery,
  useGetUsersQuery,
} from "../services/usersAPI";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  // const userByID = useGetUserbyIDQuery();

  const handleDelete = async (id) => {
    try {
      const isConfirm = confirm(
        `Are you sure you want to delete the Post with ID : ${id} `
      );
      if (isConfirm) {
        await deleteUser(id);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = async (id) => {
    try {
      console.log(id);
      // await getUserbyID(id);
      // userByID(`${id}`);
      // userByID("b26b");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading users</div>;

  return (
    <ul className="list-user">
      {/* <p>Data from the API</p> */}
      {data.map((user) => (
        <div className="list-item" key={user.id}>
          <li onClick={() => handleUser(user.id)}>{user.email}</li>
          <span onClick={() => handleDelete(user.id)}>X</span>
        </div>
      ))}
    </ul>
  );
};

export default Users;
