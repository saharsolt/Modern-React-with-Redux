import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItems from "./UsersListItems";
function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUsers, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users; //{data:[], isLoading:false, error: null}
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAddUsers();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-6 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error of fetching data</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItems key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">List of users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add user
        </Button>

        {creatingUserError && "User error"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
