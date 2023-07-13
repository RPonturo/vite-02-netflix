import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { StampaPreferiti } from "../Components/StampaPreferiti";
import { useContext } from "react";
import { Context } from "../Contexts";

export default function Preferiti() {
    const { preferiti } = useContext(Context);

    return (
        <>
            <div className="row py-3 px-5 mx-0">
                {preferiti.map((el) => (
                    <div className="col-12" key={el}>
                        {el}
                    </div>
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
