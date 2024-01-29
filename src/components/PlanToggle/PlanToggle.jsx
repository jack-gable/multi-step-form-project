import React from "react";
import styles from "./PlanToggle.module.css";
import * as Switch from "@radix-ui/react-switch";

function PlanToggle({ plan, setPlan }) {
	const [checked, setChecked] = React.useState(false);

	return (
		<div className={styles.wrapper}>
			<label
				htmlFor={plan}
				style={{ color: checked ? "" : "var(--marine-blue)" }}
			>
				Monthly
			</label>
			<Switch.Root
				className={styles.SwitchRoot}
				id={plan}
				value={plan}
				checked={checked}
				onCheckedChange={() => {
					if (plan === "monthly") {
						setPlan("yearly");
					} else {
						setPlan("monthly");
					}
					setChecked(!checked);
				}}
			>
				<Switch.Thumb className={styles.SwitchThumb} />
			</Switch.Root>
			<label
				htmlFor={plan}
				style={{ color: checked ? "var(--marine-blue)" : "" }}
			>
				Yearly
			</label>
		</div>
	);
}

export default PlanToggle;
