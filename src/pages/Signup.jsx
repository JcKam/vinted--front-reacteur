import axios from "axios";
import { useState } from "react";

// COMPONENTS
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  // Ces 3 states sont relié aux input correspondants
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  // Fonction qui est déclenchée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    // Empêche le rafraichissement par défaut du navigateur lors de la soumission
    // console.log(event);
    event.preventDefault();
    // Vérifier que mon mot de passe fait plus de 8 caractères
    if (password.length >= 8) {
      // J'affiche une alerte
      alert("Vous avez créé un compte !");
    } else {
      // Je fais apparaître mon message d'erreur
      setShowError(true);
    }
  };
  return (
    <main className="container debug2">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="idName"
          label="Name"
          type="text"
          placeholder="Fernand Naudin"
          setState={setUsername}
          value={userName}
        />
        <Button label="S'inscrire" />
      </form>
    </main>
  );
};

export default Signup;
