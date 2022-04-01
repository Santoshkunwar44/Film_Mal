import './App.css';
import { Banner } from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row';
import requests from "./request"

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      {/* <Banner /> */}
      <div className='row_container'>

        <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentries} /> */}
      </div>
    </div>
  );
}

export default App;