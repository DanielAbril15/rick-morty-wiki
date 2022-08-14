import React from "react";
import useFetch from "../hooks/useFetch";
import "./css/characterCard.css";
const CharacterCard = ({ url }) => {
  const character = useFetch(url);
  console.log(character);
  return (
    <section className="card-container">
      <div className={`status ${character?.status}-container`}>
        <span className={character?.status}></span>
        {character?.status}
      </div>
      <figure>
        <img src={character?.image} alt={`${character?.name} image`} />
      </figure>
      <p className="name">{character?.name}</p>
      <p>
        Species: <span> {character?.species}</span>
      </p>
      <p>
        Origin: <span>{character?.origin.name}</span>
      </p>
      <p>
        Episodes:<span>{character?.episode.length}</span>
      </p>
    </section>
  );
};

export default CharacterCard;
