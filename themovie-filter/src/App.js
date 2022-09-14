import './App.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import MovieCard from './components/MovieCard';
import Filter from './components/Filter';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular =  async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f43d10ca6cffd5b313f728bb10d15f3&language=en-US&page=1");
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </AnimatePresence>
      </motion.div>
      {/* <pre>{JSON.stringify(popular, null, 2)}</pre> */}
    </div>
  );
}

export default App;
