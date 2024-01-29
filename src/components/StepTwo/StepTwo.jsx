import styles from "./StepTwo.module.css";

function StepTwo({ children }) {
	return (
		<section className={styles.wrapper}>
			<h1>Select your plan</h1>
			<p>You have the option of monthly or yearly billing.</p>
			{children}
		</section>
	);
}

export default StepTwo;
