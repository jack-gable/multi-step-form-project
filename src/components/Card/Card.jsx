// import React from 'react';
import styles from "./Card.module.css";

function Card({ children }) {
	return <div className={styles.wrapper}>{children}</div>;
}

export default Card;
