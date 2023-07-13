import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { ContextProvider } from "../Contexts";

export default function Root() {
    return (
        <>
            <ContextProvider>
                <Menu />
                <Outlet />
                <Footer />
            </ContextProvider>
        </>
    );
}
