
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const getTopAnime = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/anime?order_by=popularity');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      
      const responseData = await response.json();
      console.log('API Response:', responseData);
      if (responseData && responseData.data && Array.isArray(responseData.data)) {
        SetTopAnime(responseData.data.slice(0, 5));
      } else {
        throw new Error('Unexpected API response format.');
      }
    } catch (error) {
      console.error('Error fetching top anime:', error);
    }
  };
  
  
  
  useEffect(()=>{
    getTopAnime();
    console.log("top anime");
    
  },[])
  console.log(topAnime);


  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <Sidebar topAnime ={topAnime}  />
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
