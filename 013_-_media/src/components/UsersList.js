import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.users; //{data:[], isLoading:false, error: null}
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  if (error) {
    return <div>Error of fetching data</div>;
  }
  return <div>{data.length}</div>;
}

export default UsersList;
