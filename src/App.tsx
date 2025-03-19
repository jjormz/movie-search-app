import React, { useState } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

function App() {
    const [query, setQuery] = useState<string>(" ");

    return (
        <>
            <ThemeButton />
            <Title />
            <SearchBar setQuery={setQuery} />
            <List query={query} />
            <Footer />
        </>
    );
}

export default App;
