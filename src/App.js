import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row';
import requests from "./request"

function App() {

  const [shouldPlay, setShouldPlay] = useState(false)


  return (
    <div className="App">

      <Navbar />
      <Banner />

      {
        requests.map((movieApi, index) => <Row key={movieApi.endPoint} rowNo={index + 1} shouldPlay={shouldPlay} setShouldPlay={setShouldPlay} title={movieApi.type} fetchUrl={movieApi.endPoint} />
        )
      }

    </div>
  );
}

export default App;
