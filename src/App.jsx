import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Info from "./Pages/Info";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Preferiti from "./Pages/Preferiti";
import { ContextProvider } from "./Contexts";

function App() {
    const urls = {
        url_image: "https://image.tmdb.org/t/p/w300",
        url_imageBig: "https://image.tmdb.org/t/p/w780",
        upcoming: "https://api.themoviedb.org/3/movie/upcoming",
        top_rated: "https://api.themoviedb.org/3/movie/top_rated",
        popular: "https://api.themoviedb.org/3/movie/popular",
        now_playing: "https://api.themoviedb.org/3/movie/now_playing",
        movie_details: "https://api.themoviedb.org/3/movie/",
        people_details: "https://api.themoviedb.org/3/person/",
    };

    return (
        <ContextProvider>
            <BrowserRouter basename="/">
                <Menu />
                <Routes>
                    <Route path="/" element={<Home urls={urls} />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/preferiti" element={<Preferiti />} />

                    <Route
                        path="/details/movie/:id"
                        element={<Details urls={urls} />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;

/*
## Add Supported Image Sizes  
                                 Min Res      Max Res  
poster   = Poster ............  500 x 750   2000 x 3000  
backdrop = Fanart ............ 1280 x 720   3840 x 2160  
still    = TV Show Episode ... 1280 x 720   3840 x 2160  
profile  = Actors Actresses ..  300 x 450   2000 x 3000  
logo     = TMDb Logo  

## API Supported Image Sizes  

|  poster  | backdrop |  still   | profile  |   logo   |
| :------: | :------: | :------: | :------: | :------: |
| -------- | -------- | -------- |    w45   |    w45   |
|    w92   | -------- |    w92   | -------- |    w92   |
|   w154   | -------- | -------- | -------- |   w154   |
|   w185   | -------- |   w185   |   w185   |   w185   |
| -------- |   w300   |   w300   | -------- |   w300   |
|   w342   | -------- | -------- | -------- | -------- |
|   w500   | -------- | -------- | -------- |   w500   |
| -------- | -------- | -------- |   h632   | -------- |
|   w780   |   w780   | -------- | -------- | -------- |
| -------- |  w1280   | -------- | -------- | -------- |
| original | original | original | original | original |  
*/
