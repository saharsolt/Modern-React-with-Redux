import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsList({ user }) {
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(result);
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  // console.log(data, error, isLoading);
  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error of loading albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          It is albums of the owner
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={handleAddAlbum}>+ Add album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumsList;
