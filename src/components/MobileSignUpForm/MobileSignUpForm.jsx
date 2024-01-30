import React from "react";
import styles from "./MobileSignUpForm.module.css";
import StepList from "../StepList";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import Summary from "../Summary";
import ThankYou from "../ThankYou";
import RadioGroup from "../RadioGroup";
import CheckGroup from "../CheckGroup";
import PlanToggle from "../PlanToggle";
import clsx from "clsx";
import { PLANS, ADD_ONS, initialAddOns } from "../../constants";
import Card from "../Card";

function MobileSignUpForm() {
	const [step, setStep] = React.useState(1);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [planToggle, setPlanToggle] = React.useState("monthly");
	const [plan, setPlan] = React.useState(null);
	const [addOns, setAddOns] = React.useState(initialAddOns);
	const [openThankYou, setOpenThankYou] = React.useState(false);
	const isFinalStep = step === 4;

	function handleReset() {
		setName("");
		setEmail("");
		setPhone("");
		setPlan(null);
		setAddOns(initialAddOns);
		setPlanToggle("monthly");
		setStep(1);
	}

	function handleSubmitForm(event) {
		event.preventDefault();
		const nextStep = step + 1;

		if (isFinalStep) {
			if (!name || !email || !phone) {
				window.alert("missing data");
			}
			// send data to server
			setOpenThankYou(true);
		}

		setStep(nextStep);
	}

	const selectedPlanData = PLANS.find((p) => p.value === plan);
	let addOnsKeys = Object.values(addOns);
	let selectedAddOnsData = [];
	for (let i = 0; i < ADD_ONS.length; i++) {
		if (addOnsKeys[i] === true) {
			selectedAddOnsData.push(ADD_ONS[i]);
		}
	}
	const initialValue = 0;
	const addOnsTotal = selectedAddOnsData.reduce(
		(acc, value) => acc + value.price,
		initialValue
	);

	return (
		<form onSubmit={handleSubmitForm}>
			<StepList
				steps={[
					{ value: 1, label: "Your Info" },
					{ value: 2, label: "Select Plan" },
					{ value: 3, label: "Add-ons" },
					{ value: 4, label: "Summary" },
				]}
				currentStep={step}
				handleChangeStep={(newStep) => {
					const completedStep1 = name && email && email.includes("@") && phone;

					if (newStep >= 2 && !completedStep1) {
						window.alert(
							"Please provide a name, email and phone number before proceeding."
						);
						return;
					}

					if (newStep >= 3 && !plan) {
						window.alert("Please select a plan before proceeding.");
						return;
					}
					setStep(newStep);
				}}
			/>
			<Card>
				{step === 1 && (
					<StepOne
						name={name}
						setName={setName}
						email={email}
						setEmail={setEmail}
						phone={phone}
						setPhone={setPhone}
					/>
				)}

				{step === 2 && (
					<StepTwo>
						<RadioGroup
							values={PLANS}
							currentValue={plan}
							handleChangeValue={(newValue) => {
								setPlan(newValue);
							}}
							planToggle={planToggle}
						/>
						<PlanToggle plan={planToggle} setPlan={setPlanToggle} />
					</StepTwo>
				)}

				{step === 3 && (
					<StepThree>
						<CheckGroup
							values={ADD_ONS}
							addOns={addOns}
							setAddOns={setAddOns}
							planToggle={planToggle}
						/>
					</StepThree>
				)}

				{step === 4 && (
					<Summary>
						<div className={styles.flexWrapper}>
							<div className={styles.container}>
								<div className={clsx(styles.flex, styles.plan)}>
									<div>
										<span>{`${selectedPlanData?.label} (${
											planToggle === "monthly" ? "Monthly" : "Yearly"
										})`}</span>
									</div>
									<span>{`$${selectedPlanData?.price}${
										planToggle === "monthly" ? "" : "0"
									}/${planToggle === "monthly" ? "mo" : "yr"}`}</span>
								</div>
								{selectedAddOnsData.map(({ value, label, price }) => (
									<div key={value} className={styles.flex}>
										<p>{label}</p>
										<span>{`+${price}${planToggle === "monthly" ? "" : "0"}/${
											planToggle === "monthly" ? "mo" : "yr"
										}`}</span>
									</div>
								))}
							</div>
							<div className={clsx(styles.flex, styles.total)}>
								<p>{`Total (per ${
									planToggle === "monthly" ? "month" : "year"
								})`}</p>
								<span>{`$${selectedPlanData?.price + addOnsTotal}${
									planToggle === "monthly" ? "" : "0"
								}/${planToggle === "monthly" ? "mo" : "yr"}`}</span>
							</div>
						</div>
					</Summary>
				)}

				{openThankYou && <ThankYou />}
			</Card>

			{!openThankYou && (
				<div className={styles.actions}>
					<button
						type="button"
						className={clsx(styles.btn, styles.secondary)}
						style={{ opacity: step >= 2 ? 1 : 0 }}
						onClick={handleReset}
					>
						Reset
					</button>
					<button className={clsx(styles.btn, styles.primary)}>
						{isFinalStep ? "Confirm" : "Next Step"}
					</button>
				</div>
			)}
		</form>
	);
}

export default MobileSignUpForm;
