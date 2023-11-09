import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ offers, setOffers }) => {
  const [offer, setOffer] = useState([]);

  // Faire une fonction qui permet à clique de chaque offre
  // De récupérer l'API

  return (
    <main className="container debug" offers={offers}>
      <h2>Page Home</h2>
      <ul>
        {offers.map((offer) => {
          return (
            <li key={offer._id} className="debug">
              <Link to={"/offer/" + offer._id} className="card">
                <h3>{offer.product_name}</h3>
                <p>{offer._id}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <p>{data.count}</p> */}

      {/* {data.offers.map(offer)} */}
    </main>
  );
};

export default Home;
