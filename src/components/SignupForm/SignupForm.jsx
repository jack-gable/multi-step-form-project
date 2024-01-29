import React from "react";
import styles from "./SignupForm.module.css";
import Card from "../Card";
import StepList from "../StepList";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import RadioGroup from "../RadioGroup";
import CheckGroup from "../CheckGroup";
import PlanToggle from "../PlanToggle";
import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";
import clsx from "clsx";

const MONTH_PLANS = [
	{
		value: "arcade",
		label: "Arcade",
		image: arcadeImg,
		price: "$9/mo",
	},
	{
		value: "advanced",
		label: "Advanced",
		image: advancedImg,
		price: "$12/mo",
	},
	{
		value: "pro",
		label: "Pro",
		image: proImg,
		price: "$15/mo",
	},
];

const YEAR_PLANS = [
	{
		value: "arcade",
		label: "Arcade",
		image: arcadeImg,
		price: "$90/yr",
	},
	{
		value: "advanced",
		label: "Advanced",
		image: advancedImg,
		price: "$120/yr",
	},
	{
		value: "pro",
		label: "Pro",
		image: proImg,
		price: "$150/yr",
	},
];

const MONTH_ADD_ONS = [
	{
		value: "online",
		label: "Online service",
		desc: "Access to multiplayer games",
		price: "$1/mo",
	},
	{
		value: "large",
		label: "Larger storage",
		desc: "Extra 1TB of cloud save",
		price: "$2/mo",
	},
	{
		value: "custom",
		label: "Customizable profile",
		desc: "Custom theme on your profile",
		price: "$2/mo",
	},
];

const YEAR_ADD_ONS = [
	{
		value: "online",
		label: "Online service",
		desc: "Access to multiplayer games",
		price: "$10/mo",
	},
	{
		value: "large",
		label: "Larger storage",
		desc: "Extra 1TB of cloud save",
		price: "$20/mo",
	},
	{
		value: "custom",
		label: "Customizable profile",
		desc: "Custom theme on your profile",
		price: "$20/mo",
	},
];

const initialAddOns = {
	online: false,
	large: false,
	custom: false,
};

function SignupForm() {
	const [step, setStep] = React.useState(1);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [planToggle, setPlanToggle] = React.useState("monthly");
	const [plan, setPlan] = React.useState(null);
	const [addOns, setAddOns] = React.useState(initialAddOns);
	const isFinalStep = step === 4;

	function handleGoBack() {
		const nextStep = step - 1;
		setStep(nextStep);
	}

	function handleSubmitForm(event) {
		event.preventDefault();
		const nextStep = step + 1;

		if (isFinalStep) {
			if (!name || !email || !phone) {
				window.alert("missing data");
			}
			// send data to server
			return;
		}

		setStep(nextStep);
	}

	return (
		<form onSubmit={handleSubmitForm}>
			<Card>
				<StepList
					steps={[
						{ value: 1, label: "Your Info" },
						{ value: 2, label: "Select Plan" },
						{ value: 3, label: "Add-ons" },
						{ value: 4, label: "Summary" },
					]}
					currentStep={step}
					handleChangeStep={(newStep) => {
						const completedStep1 =
							name && email && email.includes("@") && phone;

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
				<div className={styles.formContainer}>
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
								values={planToggle === "monthly" ? MONTH_PLANS : YEAR_PLANS}
								currentValue={plan}
								handleChangeValue={(newValue) => {
									setPlan(newValue);
								}}
							/>
							<PlanToggle plan={planToggle} setPlan={setPlanToggle} />
						</StepTwo>
					)}
					{step === 3 && (
						<StepThree>
							<CheckGroup
								values={planToggle === "monthly" ? MONTH_ADD_ONS : YEAR_ADD_ONS}
								addOns={addOns}
								setAddOns={setAddOns}
							/>
						</StepThree>
					)}
					<div className={styles.actions}>
						<button
							type="button"
							className={clsx(styles.btn, styles.secondary)}
							style={{ opacity: step >= 2 ? 1 : 0 }}
							onClick={handleGoBack}
						>
							Go Back
						</button>
						<button className={clsx(styles.btn, styles.primary)}>
							{isFinalStep ? "Confirm" : "Next Step"}
						</button>
					</div>
				</div>
			</Card>
		</form>
	);
}

export default SignupForm;
