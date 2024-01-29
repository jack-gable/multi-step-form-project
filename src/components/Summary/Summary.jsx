// import React from 'react';
import styles from "./Summary.module.css";

function Summary({ children }) {
	return (
		<section className={styles.wrapper}>
			<h1>Finishing up</h1>
			<p>Double-check everything looks OK before confirming.</p>
			{children}
		</section>
	);
}

export default Summary;
