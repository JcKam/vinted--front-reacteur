import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  console.log(params.id);
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <p>Loading ...</p>
  ) : (
    <main className="container debug2">
      <img className="img" src={data.product_image.secure_url} alt="" />
      <h2>Offer</h2>Je suis sur la page Offer, son id est {id}
      <h3>{data.product_name}</h3>
      {data.product_details.map((detail, index) => {
        const ObjectKeys = Object.keys(detail);
        // Object.keys Extrait les clefs de l'objet
        // Object.value Pour extraire la valeur d'une clé
        console.log(ObjectKeys);
        const ObjectKey = ObjectKeys[0];
        console.log(ObjectKey);
        return (
          <p key={index}>
            {ObjectKey} : {detail[ObjectKey]}
          </p>
        );
      })}
      <br></br>
      <Link to="/" className="button button-secondary">
        Retour à la liste des offres
      </Link>
      <Link to="/" className="button button-primary">
        Acheter
      </Link>
    </main>
  );
};

export default Offer;
