import './GalleryNavigation.css';
import { NavLink } from 'react-router-dom';

function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      {galleries.map((gallery) => {
        return (
          <NavLink key={gallery.id} to={`galleries/${gallery.galleryid}`} end>
            {gallery.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default GalleryNavigation;
