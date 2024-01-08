import Card from "../components/cards/MovieCard";
import { movieList } from "../utils/MovieList";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="gap-4">
        <h2 className="text-2xl font-bold mt-4 dark:text-emerald-200">
          Last Added Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {movieList.slice(0, 5).map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </section>

      <section className="gap-4">
        <h2 className="text-2xl font-bold dark:text-emerald-200">
          Películas populares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {movieList.slice(6, 11).map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </section>

      <section className="gap-4">
        <h2 className="text-2xl font-bold dark:text-emerald-200">
          Best Rated Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {movieList.slice(12, 17).map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};
