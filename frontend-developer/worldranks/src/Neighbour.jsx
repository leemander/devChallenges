import { Link } from "react-router-dom";

export default function Neighbour({ img, alt, name }) {
  return (
    <article className="country__neighbour">
      <img src={img} alt={alt} className="neighbour__img" />
      <Link to={`/country/:name`} className="neighbour__link">
        {name}
      </Link>
    </article>
  );
}
