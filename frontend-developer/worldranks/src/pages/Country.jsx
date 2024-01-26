export default function Country(props) {
  return (
    <main className="country">
      <img src={props.img} alt={props.alt} className="country__flag" />
      <h1 className="country__name">{props.name.common}</h1>
      <p className="country__official-name">{props.name.official}</p>
      <div className="country__key-facts">
        <div className="key-facts__fact">
          <span>Population</span>
          <span>{props.population}</span>
        </div>
        <div className="key-facts__fact">
          <span>Area (km³)</span>
          <span>{props.area}</span>
        </div>
        <table>
          <tr>
            <th>Capital</th>
            <td>{props.capital[0]}</td>
          </tr>
          <tr>
            <th>Subregion</th>
            <td>{props.subregion}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>{props.languages}</td>
          </tr>
          <tr>
            <th>Currencies</th>
            <td>{props.currencies}</td>
          </tr>
          <tr>
            <th>Continents</th>
            <td>{props.continents}</td>
          </tr>
        </table>
        <h2>Neighbouring Countries</h2>
        <div className="flex country__neighbours">{getNeighbours()}</div>
      </div>
    </main>
  );
}
