import { useState } from "react";

export default function CreatePlayer() {
const [name, setName] = useState('');
const [breed, setBreed] = useState('');
const [status, setStatus] = useState('Bench');
const [image, setImage] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault();
}
  
    return (
      <>
      <div>
      <h2>Create Player</h2><form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:{" "}
          <input
            className="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:{" "}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)} >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
            </select>
        </label>
        <label>
          Image:{" "}
          <input
            className="image"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
        </label>
        <button>Submit</button>
        {/* <p>{ name }</p>
        <p>{ breed }</p>
        <p>{ status }</p>
        <p>{ image }</p> */}
      </form>
      </div>
      </>
    )
}