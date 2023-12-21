import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  const gallery = galleries.find((gallery) => {
    return galleryId === gallery.gallerynumber;
  });

  const imageTiles = gallery.objects.map((artwork) => {
    return <ArtImageTile key={artwork.id} art={artwork} />;
  });
  console.log(gallery);

  return (
    <>
      <h2>{gallery.name}</h2>
      {imageTiles}
    </>
  );
}

export default GalleryView;
