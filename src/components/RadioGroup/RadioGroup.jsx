import React from "react";
import styles from "./RadioGroup.module.css";

function RadioGroup({ values, currentValue, handleChangeValue, planToggle }) {
	const id = React.useId();

	return (
		<ul className={styles.wrapper}>
			{values.map(({ value, label, image, price }) => {
				const optionId = `radio-group-${id}-${value}`;
				return (
					<li key={value}>
						<label htmlFor={optionId}>
							<div className={styles.icon}>
								<img src={image} alt="" />
							</div>
							<input
								type="radio"
								id={optionId}
								value={value}
								checked={value === currentValue}
								onChange={() => {
									handleChangeValue(value);
								}}
							/>
							<div>
								<span className={styles.planTitle}>{label}</span>
								<p>{`+$${price}${planToggle === "monthly" ? "" : "0"}/${
									planToggle === "monthly" ? "mo" : "yr"
								}`}</p>
								<p>{planToggle === "monthly" ? "" : "2 months free"}</p>
							</div>
						</label>
					</li>
				);
			})}
		</ul>
	);
}

export default RadioGroup;
