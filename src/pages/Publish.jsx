import { useState } from "react";
import axios from "axios";

// COMPONENTS
import Input from "../components/Input";

const Publish = ({ props }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");

  return (
    <section>
      <div className="container debug">
        <h2>Vends ton article</h2>
        <form>
          <fieldset>
            <legend>Photo(s)</legend>
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Description</legend>
            <Input
              id="idUserName"
              label="Titre"
              name="title"
              type="text"
              placeholder="ex: Chemise, Sézane verte"
              setState={setTitle}
              value={title}
              required={true}
            />

            <div className="input-group">
              <label htmlFor="story">Décris ton article</label>

              <textarea
                id="story"
                name="story"
                rows="6"
                cols="33"
                className="input"
              ></textarea>
            </div>
          </fieldset>
          <fieldset>
            <legend>Détails</legend>
          </fieldset>
          <button type="submit">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Publish;
