import { useEffect } from "react";
import Banner from "./pages/Home/Banner";
import Header from "./components/Header";
import MovieList from "./pages/Home/MovieList";
import { useState } from "react";
import MovieSearch from "./pages/Home/MovieSearch";
import { MovieProvider } from "./context/MovieDetailContext";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    if (value === "") return setSearchData([]);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      const urls = [
        "https://api.themoviedb.org/3/trending/movie/day?language=vi",
        "https://api.themoviedb.org/3/movie/top_rated?language=vi",
        // Add more URLs here...
      ];
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const fetchMovies = async (url) => {
        return await fetch(url, options).then((response) => response.json());
      };

      try {
        const response = await Promise.all(urls.map(fetchMovies));

        setTrendingMovies(response[0].results);
        setTopRatedMovies(response[1].results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Router>
      <MovieProvider>
        <div className="h-full bg-black text-white min-h-screen pb-10 relative">
          <Header onSearch={handleSearch} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {searchData.length === 0 && (
                    <MovieList
                      title="Phim Hot"
                      data={trendingMovies.slice(0, 10)}
                    />
                  )}
                  {searchData.length === 0 && (
                    <MovieList
                      title="Phim đề cử"
                      data={topRatedMovies.slice(0, 10)}
                    />
                  )}
                  {searchData.length > 0 && <MovieSearch data={searchData} />}
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
