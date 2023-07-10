import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import FilmCard from "./FilmCard";
import "./Films.css";

export default function Films({ url, urls }) {
    const [films, setFilms] = useState();
    const { data: dataFilms } = useFetch(url, null);
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        containScroll: "trimSnaps",
        align: "start",
    });

    useEffect(() => {
        if (dataFilms) {
            setFilms(dataFilms.results);
        }
    }, [dataFilms]);

    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container py-3">
                    {films &&
                        films.map((el) => (
                            <FilmCard key={el.id} film={el} urls={urls} />
                        ))}
                </div>
            </div>
        </>
    );
}
/*

*/
