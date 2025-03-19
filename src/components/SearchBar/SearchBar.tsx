import React, { FC, useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    setQuery(query: string): void;
}

const SearchBar: FC<SearchBarProps> = ({ setQuery }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = () => {
        setQuery(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                className={styles.search__bar}
                placeholder="Search movie..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className={styles.search__button} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
