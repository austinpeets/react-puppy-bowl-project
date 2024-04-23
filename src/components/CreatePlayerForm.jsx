import { useState } from "react";

export default function CreatePlayer() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const createPlayerForm = { name, breed, status, image };

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-mt-web-pt/players/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createPlayerForm),
        }
      );

      const result = await response.json();
      return result
    } catch (error) {
      console.error(error)
      setError(error.message);
    }
  }

  return (
    <>
      <div>
        <h2>Create Player</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter name'
            />
          </label>
          <br />
          <label>
            Breed:{" "}
            <input
              className="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder='Enter breed'
            />
          </label>
          <br />
          <label>
            Status (choose one):{" "}
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="bench">Bench</option>
              <option value="field">Field</option>
            </select>
          </label>
          <br />
          <label>
            Image URL:{" "}
            <input
              type="url"
              name="imageUrl"
              className="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='Enter image URL'
            />< br /> 
            {image && (
              <img src={image} alt="Uploaded image" style={{ maxWidth: "100%"}} />
            )}
          </label>
          <br />
          <button type='submit'>Submit</button>
          <p>{name}</p>
          <p>{breed}</p>
          <p>{status}</p>
        </form>
      </div>
    </>
  );
}
