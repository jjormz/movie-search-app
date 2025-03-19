import React, { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import { IMovie } from "../../types/types";
import styles from "./List.module.css";
import axios from "axios";

interface ListProps {
    Search?: IMovie[];
    query: string;
}

const List: FC<ListProps> = ({ query }) => {
    const [moviesList, setMoviesList] = useState<IMovie[]>([]);
    const API_KEY = "4fac4656";
    const URL = "https://www.omdbapi.com/?";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get<ListProps>(URL, {
                    params: {
                        apikey: API_KEY,
                        s: query,
                    },
                });

                if (response.data.Search) {
                    setMoviesList(response.data.Search);
                    console.log(response.data.Search);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, [query]);

    return (
        <div className={styles.list__container}>
            {moviesList.map(movie => {
                return <Card key={movie.imdbID} movie={movie} />;
            })}
        </div>
    );
};

export default List;
