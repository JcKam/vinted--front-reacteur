import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  //   const params = useParams();
  // useParams permet de récupérer les params présent dans l'url de la page

  const { params } = useParams();
  console.log(params);
  //   console.log(params.id);
  return (
    <main className="container debug2">
      <h2>Offer</h2>Je suis sur la page Offer, son id est
      <Link to="/">Retour</Link>
    </main>
  );
};

export default Offer;
