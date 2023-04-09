import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.users; //{data:[], isLoading:false, error: null}
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoading) {
    return <Skeleton times={6} className="h-6 w-full" />;
  }

  if (error) {
    return <div>Error of fetching data</div>;
  }
  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex items-center p-2 cursor-pointer justify-between">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">List of users</h1>
        <Button onClick={handleUserAdd}>+ Add user</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
