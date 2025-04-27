import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import './index.css'
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";

const App = () => {
  const [iterate, setIterate] = useState({
    previous: null,
    results: [],
    next: ""
  })
  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  const handleToggle = () => {
    setToggleDarkMode(prevToggle => !prevToggle)
    console.log(toggleDarkMode)
  }
  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v4/articles/')
      .then(res => res.data)
      .then(res => {
        const { previous, results, next } = res;
        setIterate({ previous, results, next })
      })
  }, [])

  const handlePrev = () => {
    if (iterate.previous === null) {
      return
    }

    axios
      .get(iterate.previous)
      .then(res => res.data)
      .then(res => {
        const { previous, results, next } = res;
        setIterate({ previous, results, next })
      })
  }

  const handleNext = () => {


    axios
      .get(iterate.next)
      .then(res => res.data)
      .then(res => {
        const { previous, results, next } = res;
        setIterate({ previous, results, next })
      })
  }

  const buttonsProps = { handlePrev, handleNext, iterate }



  return (
    <div className={toggleDarkMode ? "App" : 'AppDark'}>

      <Header handleToggle={handleToggle} toggleDarkMode={toggleDarkMode} />
      <Buttons {...buttonsProps} />

      <Card articles={iterate.results} toggleDarkMode={toggleDarkMode} />
      <Buttons {...buttonsProps} />
    </div>
  )
}

export default App;
