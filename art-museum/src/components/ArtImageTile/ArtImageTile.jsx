import { Link } from "react-router-dom"

function ArtImageTile({art}) {
    return (
        <Link to={`art/${art.id}`}>
            <img src={art.primaryimageurl} />
        </Link>
    )
}

export default ArtImageTile