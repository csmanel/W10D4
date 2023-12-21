import { useParams } from 'react-router-dom';

export default function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  const gallery = galleries.find((gallery) => {
    return galleryId === gallery.gallerynumber;
  });
  console.log(gallery);

  return <h2>{gallery.name}</h2>;
}
