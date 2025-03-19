import React, { FC } from "react";
import styles from "./Card.module.css";
import { IMovie } from "../../types/types";

interface CardProps {
    movie: IMovie;
}

const Card: FC<CardProps> = ({ movie }) => {
    return (
        <div className={styles.card__container}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
        </div>
    );
};

export default Card;
