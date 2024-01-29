// import React from 'react';
import clsx from "clsx";
import styles from "./StepList.module.css";

function StepList({ steps, currentStep, handleChangeStep }) {
	return (
		<div className={styles.wrapper}>
			<ol className={styles.list}>
				{steps.map(({ label, value }) => (
					<li key={value}>
						<button
							className={styles.listItem}
							onClick={() => handleChangeStep(value)}
						>
							<span
								className={clsx(
									styles.stepNum,
									value === currentStep && styles.active
								)}
							>
								{value}
							</span>
							<div className={styles.itemContainer}>
								<span className={styles.stepLabel}>{`step ${value}`}</span>
								{label}
							</div>
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

export default StepList;
