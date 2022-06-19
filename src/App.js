import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [test, setTest] = useState('')

  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles/')
      .then(res => res.data)
      .then(result => setTest(result[0]))
  })

  return (
    <div className="App">
      <h2>{test.title}</h2>
      <img src={test.imageUrl} alt='' width='100px' />
    </div>
  )
}

export default App;
