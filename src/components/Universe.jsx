import React from "react";
import "./css/universe.css";
const Universe = ({ universe, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.search.value <= 0 || e.target.search.value >= 127) {
      alert("Write a number between 1 and 126");
    } else {
      setLocation(e.target.search.value);
    }
  };

  return (
    <div className="universe">
      <p className="universe-instruction">Write a number between 1 and 126</p>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="universe number" id="search" />
        <button>Search</button>
      </form>
      <section className="universe-info">
        <p className="universe-info_text ">
          Universe: <span>{universe?.name}</span>
        </p>
        <p className="universe-info_text">
          Type: <span>{universe?.type}</span>
        </p>
        <p className="universe-info_text">
          Dimension: <span>{universe?.dimension}</span>
        </p>
        <p className="universe-info_text">
          Population: <span>{universe?.residents.length}</span>
        </p>
      </section>
    </div>
  );
};

export default Universe;
