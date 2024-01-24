export default function TableRow(props) {
  return (
    <tr>
      <td>
        <img src={props.img} alt={props.alt} />
      </td>
      <td>{props.name}</td>
      <td>{props.pop}</td>
      <td>{props.area}</td>
    </tr>
  );
}
