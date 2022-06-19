import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import './index.css'

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles/')
      .then(res => res.data)
      .then(result => setArticles(result))
  }, [])
  console.log(articles[0])
  
  
  return (
    <div className="App">
      <Card articles={articles}/>
    </div>
  )
}

export default App;
