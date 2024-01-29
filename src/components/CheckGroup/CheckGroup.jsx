import React from "react";
import styles from "./CheckGroup.module.css";

function CheckGroup({ values, addOns, setAddOns }) {
	const id = React.useId();

	return (
		<ul className={styles.wrapper}>
			{values.map(({ value, label, price, desc }) => {
				const optionId = `check-group-${id}-${value}`;
				return (
					<li key={value}>
						<label htmlFor={optionId}>
							<input
								type="checkbox"
								id={optionId}
								value={value}
								checked={addOns[value] === true}
								onChange={(e) => {
									setAddOns({
										...addOns,
										[value]: e.target.checked,
									});
								}}
							/>
							<div className={styles.container}>
								<div>
									<span className={styles.label}>{label}</span>
									<p>{desc}</p>
								</div>
								<span className={styles.price}>{`+${price}`}</span>
							</div>
						</label>
					</li>
				);
			})}
		</ul>
	);
}

export default CheckGroup;
