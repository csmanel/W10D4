import { Link, useParams } from 'react-router-dom';

export default function ArtDescription({ galleries }) {
  const { artId, galleryId } = useParams();
  const gallery = galleries.find((gallery) => {
    return galleryId === gallery.gallerynumber;
  });
  const artwork = gallery.objects.find((art) => {
    return parseInt(artId) === art.id;
  });
  console.log(artwork);
  return (
    <>
      <Link to="../">Back To Gallery</Link>
      <Link to={artwork.url}>{artwork.title}</Link>
      <p>{artwork.description}</p>
      <p>{artwork.creditline}</p>
      <p>{artwork.technique}</p>
    </>
  );
}
