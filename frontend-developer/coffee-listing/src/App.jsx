import CoffeeCard from "./CoffeeCard";
import data from "./data.json";

function App() {
  return (
    <>
      <main className="collection">
        <h1>Our Collection</h1>
        <p className="collection__intro">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <button className="collection__button selected">All Products</button>
        <button className="collection__button">Available Now</button>
        <div className="collection__grid">
          {data.map((coffee, index) => {
            return (
              <CoffeeCard
                available={coffee.available}
                avgRating={coffee.averageRating}
                img={coffee.imgSrc}
                key={index + 1}
                name={coffee.name}
                popular={coffee.popular}
                price={coffee.price}
                ratings={coffee.ratings}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
