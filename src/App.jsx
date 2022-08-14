import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import Universe from "./components/Universe";
import useFetch from "./hooks/useFetch";

function App() {
  const random = Math.ceil(Math.random() * 126);
  const [location, setLocation] = useState(random);
  const URL = `https://rickandmortyapi.com/api/location/${location}`;
  const universe = useFetch(URL);

  return (
    <div className="App">
      <Header />
      <Universe universe={universe} setLocation={setLocation} />
      <section className="characters-container">
        {universe?.residents.map((url) => (
          <CharacterCard key={url} url={url} />
        ))}
      </section>
    </div>
  );
}

export default App;
