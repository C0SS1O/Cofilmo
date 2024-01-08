import { movieList } from "../utils/MovieList";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section>
        <h2 className="text-2xl font-bold mt-4">
          Películas populares
        </h2>
        <ul>
          {movieList.slice(0, 10).map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-4">Best Rated Movies</h2>
        <ul>
          {movieList.slice(10, 15).map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-4">Last Added Movies</h2>
        <ul>
          {movieList.slice(15, 18).map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
