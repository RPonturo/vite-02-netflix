import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark border-bottom border-bottom-dark bg-opacity-75">
            <div className="container-fluid">
                <NavLink
                    to="/"
                    className="navbar-brand text-danger bolder fs-3"
                >
                    NETFLIX
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/info"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Info
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

/*

*/
