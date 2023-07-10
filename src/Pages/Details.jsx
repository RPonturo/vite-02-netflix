import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Films from "../Components/Films";

export default function Details({ urls }) {
    const { id } = useParams();
    const [film, setFilm] = useState();
    const [attori, setAttori] = useState();

    const { data: dataFilm } = useFetch(`${urls.movie_details}${id}`, null);
    const { data: dataCredits } = useFetch(
        `${urls.movie_details}${id}/credits`,
        null
    );

    useEffect(() => {
        if (dataFilm) {
            setFilm(dataFilm);
        }
    }, [dataFilm]);

    useEffect(() => {
        if (dataCredits) {
            setAttori(dataCredits.cast);
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

/*
    const { dataAttori } = useFetch(
        `${urls.movie_details}${id}/credits${urls.key}`,
        null
    );
        useEffect(() => {
        if (dataAttori && dataAttori !== null) {
            setAttori(dataAttori);
        }
    }, [dataAttori]);

                style={
                    film.data
                        ? {
                              backgroundSize: "cover",
                              //backgroundImage: `url(${urls.url_imageBig}${film.data.backdrop_path}`,
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              //filter: "blur(6px)",
                          }
                        : {}
                }


                
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((r) => r.json())
            .then((r) => setPost(r));
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((r) => r.json())
            .then((r) => setComments(r));
    });


                    {post && (
                    <div className="col-12">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )}
                <div className="col-12">
                    {comments &&
                        comments.map((el) => <li key={el.id}>{el.body}</li>)}
                </div>
*/
