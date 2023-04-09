import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const { data } = useSelector((state) => {
    return state.users; //{data:[], isLoading:false, error: null}
  });
  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        //setIsLoadingUsers(false);
      })
      .catch((err) => {
        setLoadingUsersError(err);
        //setIsLoadingUsers(false);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      });
  }, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-6 w-full" />;
  }

  if (loadingUsersError) {
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
        {isCreatingUser ? (
          "Loading"
        ) : (
          <Button onClick={handleUserAdd}>+ Add user</Button>
        )}
        {creatingUserError && "User error"}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
