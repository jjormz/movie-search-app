import React from "react";
import styles from "./Title.module.css";

const Title = () => {
    return (
        <div className={styles.title__container}>
            <h1 className={styles.title}>
                Find your{" "}
                <span className={styles.colorized__word}>favourite </span>
                movie
            </h1>
        </div>
    );
};

export default Title;
