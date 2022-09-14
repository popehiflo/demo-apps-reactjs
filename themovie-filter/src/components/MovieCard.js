import './MovieCard.css';
import { motion } from 'framer-motion';

function MovieCard({movie}) {
  return (
    <motion.div 
      layout 
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{movie.title}</h2>
      <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
    </motion.div>
  );
};

export default MovieCard;