import { Link } from "react-router-dom";

export default function TableRow(props) {
  return (
    <tr>
      <td>
        <img src={props.img} alt={props.alt} className="table__flag" />
      </td>
      <td className="table__name">
        <Link to={`/country/${props.name.toLowerCase()}`}>{props.name}</Link>
      </td>
      <td>{props.pop}</td>
      <td>{props.area}</td>
    </tr>
  );
}
