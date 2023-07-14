import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { StampaPreferiti } from "../Components/StampaPreferiti";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Contexts";

export default function Preferiti({ urls }) {
    const { idPreferiti } = useContext(Context);
    const [films, setFilms] = useState([]);

    const key = `?api_key=${
        import.meta.env.VITE_API_KEY
    }&language=it-IT&include_image_language=it,en,null`;

    useEffect(() => {
        idPreferiti.map((el) =>
            fetch(urls.movie_details + el + key)
                .then((res) => res.json())
                .then((data) => setFilms((films) => [...films, data]))
                .catch((err) => console.log(err))
        );
    }, []);

    return (
        <>
            <div className="row py-3 px-5 mx-0">
                <div className="col-12">
                    <PDFDownloadLink
                        document={
                            <StampaPreferiti
                                films={films}
                                url={urls.url_image}
                            />
                        }
                        fileName="preferiti"
                    >
                        {({ loading }) =>
                            loading ? (
                                <button className="btn btn-danger" disabled>
                                    Caricamento...
                                </button>
                            ) : (
                                <button className="btn btn-danger">
                                    Download PDF
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                </div>
            </div>
            <div className="row px-5 mx-0">
                <PDFViewer className="col-12" height="600px">
                    <StampaPreferiti films={films} url={urls.url_image} />
                </PDFViewer>
            </div>
        </>
    );
}
