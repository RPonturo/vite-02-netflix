import { Link } from "react-router-dom";

import Footer from "../Components/Footer";

export default function Error() {
    return (
        <>
            <div className="row py-5 px-5 mx-0 text-white text-center">
                <div className="col-12">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3">
                        <span class="text-danger">Opps!</span> Page not found.
                    </p>
                    <p class="lead">
                        The page you're looking for doesn't exist.
                    </p>
                    <Link to={`/`} className="btn btn-danger btn-lg">
                        Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
