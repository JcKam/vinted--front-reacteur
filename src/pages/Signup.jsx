import axios from "axios";
import { useState } from "react";

// COMPONENTS
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/checkbox";

const Signup = () => {
  // Ces 3 states sont relié aux input correspondants
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [showError, setShowError] = useState("");

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
          id="idUserName"
          label="Name"
          name="name"
          type="text"
          placeholder="Fernand Naudin"
          setState={setUsername}
          value={userName}
          required={true}
        />
        <Input
          id="idEmail"
          label="E-mail"
          name="email"
          type="email"
          placeholder="distributeurdebourpifs@gmail.com"
          setState={setEmail}
          value={email}
        />
        <Input
          id="idPassWord"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          setState={setPassword}
          helpMessage="8 caractère minimum"
        />
        <div className="input-group">
          <Checkbox
            id="idNewsletter"
            label="S'inscrire à notre newsletter"
            type="checkbox"
            placeholder="Fernand Naudin"
            setState={setNewsLetter}
            Z
            value={newsLetter}
          />
        </div>
        <Button
          label="S'inscrire"
          disabled="disabled"
          size="button-lg"
          style="button-primary"
          type="submit"
        />
        {showError && <p>{showError}</p>}
      </form>
    </main>
  );
};

export default Signup;
