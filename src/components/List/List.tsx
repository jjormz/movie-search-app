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
    const URL = "https://www.omdbapi.com/";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(URL, {
                    params: {
                        apikey: API_KEY,
                        s: query,
                    },
                });

                if (response.data.Search) {
                    // Преобразуем Year в число и сортируем по возрастанию
                    const sortedMovies = response.data.Search.map(
                        (movie: IMovie) => ({
                            ...movie,
                            Year: parseInt(movie.Year.toString()), // на случай если придет строка
                        })
                    ).sort((a: IMovie, b: IMovie) => a.Year - b.Year);

                    setMoviesList(sortedMovies);
                    console.log(sortedMovies);
                }
            } catch (error) {
                console.error("Ошибка при получении фильмов:", error);
            }
        };

        if (query) {
            fetchMovies();
        }
    }, [query]);

    return (
        <div className={styles.list__container}>
            {moviesList.map(movie => (
                <Card key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default List;
