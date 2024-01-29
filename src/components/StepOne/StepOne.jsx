import React from "react";
import styles from "./StepOne.module.css";

function StepOne({ name, setName, email, setEmail, phone, setPhone }) {
	const id = React.useId();

	return (
		<section className={styles.wrapper}>
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
			<label htmlFor={`name-${id}`}>Name</label>
			<input
				id={`name-${id}`}
				type="text"
				placeholder="e.g. Stephen King"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
				required
				onInvalid={(e) => e.target.setCustomValidity("This field is required")}
			/>
			<label htmlFor={`email-${id}`}>Email Address</label>
			<input
				id={`email-${id}`}
				type="email"
				placeholder="e.g. stephenking@lorem.com"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				required
				onInvalid={(e) => e.target.setCustomValidity("This field is required")}
			/>
			<label htmlFor={`phone-${id}`}>Phone Number</label>
			<input
				id={`phone-${id}`}
				type="tel"
				placeholder="e.g. +1 234 567 890"
				value={phone}
				onChange={(e) => {
					setPhone(e.target.value);
				}}
				required
				onInvalid={(e) => e.target.setCustomValidity("This field is required")}
			/>
		</section>
	);
}

export default StepOne;
