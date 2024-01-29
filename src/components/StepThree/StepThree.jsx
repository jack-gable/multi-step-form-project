import styles from "./StepThree.module.css";

function StepThree({ children }) {
	return (
		<section className={styles.wrapper}>
			<h1>Pick add-ons</h1>
			<p>Add-ons help enhance your gaming experience.</p>
			{children}
		</section>
	);
}

export default StepThree;
