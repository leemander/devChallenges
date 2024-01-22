export default function CoffeeCard(props) {
  return (
    <article className={`collection__card ${props.popular && "popular"}`}>
      <img src={props.img} alt={props.name} />
      <div className="justify-between">
        <h2>{props.name}</h2>
        <span className="card__price">{props.price}</span>
      </div>
      <div className="justify-between">
        <div className="flex">
          <img
            src={
              props.ratings > 0 ? "./images/star_fill.svg" : "./images/star.svg"
            }
            alt="Star rating"
          />
          {props.ratings > 0 ? (
            <span>
              {props.avgRating}
              <span className="card__ratings">({props.ratings})</span>
            </span>
          ) : (
            <span className="card__ratings">No ratings</span>
          )}
        </div>
        {!props.available && <span className="card__sold-out">Sold out</span>}
      </div>
    </article>
  );
}
