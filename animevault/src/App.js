
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");


  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <Sidebar topAnime ={topAnime}  />
      </div>
    </div>
  );
}

export default App;
