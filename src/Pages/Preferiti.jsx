import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { StampaPreferiti } from "../Components/StampaPreferiti";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Contexts";
import useFetch from "../Hooks/useFetch";

export default function Preferiti({ urls }) {
    const { idPreferiti } = useContext(Context);
    const [films, setFilms] = useState();

    const { data: dataFilms } = idPreferiti.map((el) => {
        useFetch(`${urls.movie_details}${el}`, null);
    });

    console.log(dataFilms);
    return (
        <>
            <div className="row py-3 px-5 mx-0">
                {idPreferiti.map((el) => (
                    <span className="col-1" key={el}>
                        {el}
                    </span>
                ))}

                <div className="col-12">
                    <PDFDownloadLink
                        document={<StampaPreferiti />}
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
                    <StampaPreferiti />
                </PDFViewer>
            </div>
        </>
    );
}
