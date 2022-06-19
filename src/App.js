import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [test, setTest] = useState([])

  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles/')
      .then(res => res.data)
      .then(result => setTest(result))
  }, [])

  
  
  return (
    <div className="App">
      <Card test={test}/>
    </div>
  )
}

export default App;
