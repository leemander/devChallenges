export default function CoffeeCard(props) {
  return (
    <article className={`collection__card ${props.popular ? "popular" : ""}`}>
      <img src={props.img} alt={props.name} className="card__img" />
      <div className="justify-between">
        <h2>{props.name}</h2>
        <span className="card__price">{props.price}</span>
      </div>
      <div className="justify-between">
        <div className="flex">
          <img
            src={
              props.ratings > 0 ? "./images/Star_fill.svg" : "./images/Star.svg"
            }
            alt="Star rating"
          />
          {props.ratings > 0 ? (
            <span className="card__rating">
              {props.avgRating}
              <span className="card__ratings"> ({props.ratings} votes)</span>
            </span>
          ) : (
            <span className="card__rating card__ratings">No ratings</span>
          )}
        </div>
        {!props.available && <span className="card__sold-out">Sold out</span>}
      </div>
    </article>
  );
}
