interface Movie {
  name: string;
  director: string;
  poster: string;
}

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster} alt={`${movie.name} Poster`} className="w-[8rem] h-[12rem] m-1 object-cover flex rounded-md grid-cols-2" />
    </div>
  );
};

export default Card;