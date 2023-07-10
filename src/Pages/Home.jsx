import Films from "../Components/Films";

export default function Home({ urls }) {
    return (
        <>
            <div className="row pt-4 px-5 mx-0 text-white">
                <h3>Novità</h3>
            </div>
            <div className="row mx-0">
                <Films url={urls.upcoming} urls={urls} />
            </div>

            <div className="row pt-4 px-5 mx-0 text-white">
                <h3>Più visti</h3>
            </div>
            <div className="row mx-0">
                <Films url={urls.popular} urls={urls} />
            </div>
            <div className="row pt-4 px-5 mx-0 text-white">
                <h3>Più apprezzati</h3>
            </div>
            <div className="row mx-0">
                <Films url={urls.top_rated} urls={urls} />
            </div>
            <div className="row pt-4 px-5 mx-0 text-white">
                <h3>Ora in onda</h3>
            </div>
            <div className="row mx-0">
                <Films url={urls.now_playing} urls={urls} />
            </div>
        </>
    );
}

/*

*/
