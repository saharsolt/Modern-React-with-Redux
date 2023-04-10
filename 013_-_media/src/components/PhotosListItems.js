import { useDeletePhotoMutation } from "../store/apis/photosApi";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";

function PhotosListItems({ photo }) {
  const [deletePhoto, deletePhotoResult] = useDeletePhotoMutation();
  const handleRemovePhoto = () => {
    deletePhoto(photo);
  };
  return (
    <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
      <img src={photo.url} alt="random pic" className="h-20 w-20" />
      <div className="absolute inset-0 flex flex-row items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <Button loading={deletePhotoResult.isLoading}>
          <GoTrashcan className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}

export default PhotosListItems;
