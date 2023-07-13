import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Films from "../Components/Films";
import { useContext } from "react";
import { Context } from "../Contexts";

export default function Details({ urls }) {
    const { id } = useParams();
    const [film, setFilm] = useState();
    const [attori, setAttori] = useState();
    const { preferiti, setPreferiti } = useContext(Context);
    const [isPreferito, setIsPreferito] = useState();

    const { data: dataFilm } = useFetch(`${urls.movie_details}${id}`, null);
    const { data: dataCredits } = useFetch(
        `${urls.movie_details}${id}/credits`,
        null
    );

    const handlePreferiti = () => {
        if (preferiti.filter((el) => el == dataFilm.id).length) {
            setPreferiti(preferiti.filter((el) => el !== dataFilm.id));
        } else {
            setPreferiti((prev) => [...prev, dataFilm.id]);
        }
        setIsPreferito(() => !isPreferito);
    };
    useEffect(() => {
        if (dataFilm) {
            setFilm(dataFilm);
            setIsPreferito(preferiti.filter((el) => el == dataFilm.id).length);
        }
    }, [dataFilm]);

    useEffect(() => {
        if (dataCredits) {
            setAttori(
                dataCredits.cast.filter(
                    (el) => el.known_for_department === "Acting"
                )
            );
        }
    }, [dataCredits]);

    return (
        film && (
            <>
                <div className="row py-3 px-5 mx-0">
                    <div className="col-12 col-lg-4 px-0 text-center">
                        <img
                            src={
                                film.poster_path
                                    ? urls.url_image + film.poster_path
                                    : ""
                            }
                        />
                    </div>
                    <div className="col-12 col-lg-8 pt-2 px-0">
                        <h1 className="mb-0 text-white">{film.title}</h1>
                        <div>{film.tagline}</div>
                        <div className="pt-3">
                            <span className="text-danger">
                                {`Voto: ${film.vote_average.toFixed(1)}`}
                            </span>
                            <span className="text-white mx-3">
                                {film.release_date.slice(0, 4)}
                            </span>
                            <span className="text-danger">
                                <i
                                    className={
                                        (isPreferito
                                            ? "fa-solid"
                                            : "fa-regular") + " fa-heart fa-2xl"
                                    }
                                    onClick={handlePreferiti}
                                ></i>
                            </span>
                        </div>
                        <div className="pt-3 text-white">{film.overview}</div>
                        <div className="pt-3">
                            {film.genres.map((el) => (
                                <a
                                    key={el.id}
                                    className="btn btn-danger btn-sm mx-1 my-1"
                                    href="#"
                                    role="button"
                                >
                                    {el.name}
                                </a>
                            ))}
                        </div>
                        <div className="pt-3">
                            {attori &&
                                attori.map((el) => (
                                    <a
                                        key={el.id}
                                        className="btn btn-outline-danger btn-sm mx-1 my-1"
                                        href="#"
                                        role="button"
                                    >
                                        {el.name}
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="row pt-4 px-5 mx-0 text-white">
                    <h3>Consigliati</h3>
                </div>
                <div className="row mx-0">
                    <Films
                        url={`${urls.movie_details}${id}/similar`}
                        urls={urls}
                    />
                </div>
            </>
        )
    );
}
