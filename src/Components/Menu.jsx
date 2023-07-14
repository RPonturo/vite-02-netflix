import { NavLink } from "react-router-dom";
import useToggle from "../Hooks/useToggle";
import { useContext } from "react";
import { Context } from "../Contexts";

export default function Navigation() {
    const [menu, setMenu] = useToggle();
    const { idPreferiti } = useContext(Context);
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
                    onClick={setMenu}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={menu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={
                        "collapse navbar-collapse " + (menu ? "show" : "")
                    }
                    id="navbarNav"
                >
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
                                to="/kifblakdfndlk"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                TryMe
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
                        <li className="nav-item">
                            <NavLink
                                to="/preferiti"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Preferiti
                                {idPreferiti.length
                                    ? ` (${idPreferiti.length})`
                                    : ""}
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
