import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";

function UsersListItems({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleDeleteUSer = () => {
    doDeleteUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center p-2 cursor-pointer justify-between">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-3"
            onClick={handleDeleteUSer}
            loading={isLoading}
          >
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItems;
