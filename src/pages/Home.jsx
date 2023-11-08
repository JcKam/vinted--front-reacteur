import { Link } from "react-router-dom";

const Home = ({ offers, setOffers }) => {
  return (
    <main>
      <h2>Home</h2>
      <ul>
        {/* {console.log(data.offers)} */}
        <li offers={offers}>
          {offers.map((offer, id) => {
            return <p key={offer.id}>{offer.product_name}</p>;
          })}
        </li>
      </ul>

      {/* <p>{data.count}</p> */}

      {/* {data.offers.map(offer)} */}
    </main>
  );
};

export default Home;
