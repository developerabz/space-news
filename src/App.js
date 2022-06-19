import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import './index.css'
import Header from "./Components/Header";

const App = () => {
  const [articles, setArticles] = useState([])
  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  const handleToggle = () => {
    setToggleDarkMode(prevToggle => !prevToggle)
    console.log(toggleDarkMode)
  }
  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles/')
      .then(res => res.data)
      .then(result => setArticles(result))
  }, [])
  
  
  
  return (
    <div className={toggleDarkMode ? "App" : 'AppDark'}>
      <Header handleToggle={handleToggle} toggleDarkMode={toggleDarkMode}/>
      <Card articles={articles} toggleDarkMode={toggleDarkMode}/>
    </div>
  )
}

export default App;
