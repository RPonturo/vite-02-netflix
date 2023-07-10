import { Link } from "react-router-dom";
import "./FilmCard.css";

export default function FilmCard({ film, urls }) {
    return (
        <div className="col-3 col-md-2 px-2 embla__slide">
            <div className="card ombra">
                <img
                    className="card-img-top d-none d-lg-block"
                    src={
                        film.backdrop_path
                            ? urls.url_image + film.backdrop_path
                            : "https://image.tmdb.org/t/p/w300/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg"
                    }
                    style={film.backdrop_path ? {} : { opacity: 0 }}
                />
                {film.backdrop_path ? (
                    ""
                ) : (
                    <span className="position-absolute badge rounded-pill translate-middle top-50 start-50 bg-secondary d-none d-lg-block">
                        <i className="fa-solid fa-video fa-2xl m-3"></i>
                    </span>
                )}
                <img
                    className="card-img d-lg-none"
                    src={
                        film.poster_path
                            ? urls.url_image + film.poster_path
                            : "https://image.tmdb.org/t/p/w300/n3jVNAEegUKu2qIsGysDP1Ba7EQ.jpg"
                    }
                    style={film.poster_path ? {} : { opacity: 0 }}
                />
                {film.poster_path ? (
                    ""
                ) : (
                    <span className="position-absolute badge rounded-pill translate-middle top-50 start-50 bg-secondary d-lg-none">
                        <i className="fa-solid fa-video fa-2xl m-3"></i>
                    </span>
                )}
                <span className="position-absolute score badge rounded-pill bg-danger translate-middle bg-opacity-75">
                    {film.vote_average.toFixed(1)}
                    <span className="visually-hidden">
                        {film.vote_average.toFixed(1)}
                    </span>
                </span>
                <Link
                    to={`/details/movie/${film.id}`}
                    className="stretched-link"
                    urls={urls}
                ></Link>
                <div className="card-footer bg-dark-subtle text-white p-2 d-none d-lg-block">
                    <h6 className="card-title m-0 text-truncate fw-light">
                        {film.title}
                    </h6>
                </div>
            </div>
        </div>
    );
}
