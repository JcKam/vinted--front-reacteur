import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ offers, setOffers }) => {
  const [offer, setOffer] = useState([]);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="container debug">
      <h2>Page Home</h2>
      <ul>
        {data.offers.map((offer) => {
          return (
            <li key={offer._id} className="debug">
              <Link to={"/offer/" + offer._id} className="card">
                <h3>{offer.product_name}</h3>
                <img
                  className="img"
                  src={offer.product_image.secure_url}
                  alt=""
                />
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
