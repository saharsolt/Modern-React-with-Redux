import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItems from "./AlbumsListItems";

function AlbumsList({ user }) {
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(result);
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // console.log(data, error, isLoading);
  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error of loading albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItems key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumsList;
