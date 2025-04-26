import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-[9999] bg-black px-4 sm:px-[50px]">
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} color="white" />
            ) : (
              <Menu size={28} color="white" />
            )}
          </button>
        </div>

        <h1 className="text-[30px] uppercase text-red-700 font-bold mr-5">
          ChillMe
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-5">
          <Link to="/" className="hover:text-red-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-700">
            Contact
          </Link>
        </nav>
      </div>

      {/* Search - Desktop Version */}
      <div className="hidden md:flex items-center space-x-3 sm:space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 text-black w-32 sm:w-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg text-sm sm:text-base"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-white p-2"
          aria-label="Search"
        >
          <Search size={24} />
        </button>
      </div>

      {/* Mobile Search Expanded */}
      {searchOpen && (
        <div className="absolute top-16 right-4 left-4 bg-black p-3 flex items-center gap-2 md:hidden border border-gray-700 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border border-gray-300 p-2 text-black rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-red-700 text-white px-3 py-2 rounded-lg"
            onClick={() => {
              onSearch(search);
              setSearchOpen(false);
            }}
          >
            <Search size={18} />
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black flex flex-col items-start py-4 space-y-4 md:hidden pl-4 border-t border-gray-800">
          <Link
            to="/"
            className="hover:text-red-700 w-full py-2 px-4"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-red-700 w-full py-2 px-4"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-700 w-full py-2 px-4"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Add search in mobile menu too */}
          <div className="w-full px-4 pt-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 border border-gray-300 p-2 text-black rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="bg-red-700 text-white px-3 py-2 rounded-lg"
                onClick={() => {
                  onSearch(search);
                  setMenuOpen(false);
                }}
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
