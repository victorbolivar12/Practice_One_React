import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const Photos = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((info) => {
        setCharacters(info.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="sniperContainer">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="containerCard">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.location.url} />
            <h1 className="img__name">{character.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
