import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

function AlbumsListItems({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();
  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleDeleteAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      It is albums of the owner
    </ExpandablePanel>
  );
}

export default AlbumsListItems;
