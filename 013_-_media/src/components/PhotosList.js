import PhotosListItems from "./PhotosListItems";
import {
  useFetchPhotosQuery,
  useAddPhotoMutation,
} from "../store/apis/photosApi";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton items={4} className="h-8 w-8" />;
  } else if (error) {
    content = error && <div>Error of fetching photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItems key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">Photos of album {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap mx-8 justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
