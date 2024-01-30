import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const PLANS = [
	{
		value: "arcade",
		label: "Arcade",
		image: arcadeImg,
		price: 9,
	},
	{
		value: "advanced",
		label: "Advanced",
		image: advancedImg,
		price: 12,
	},
	{
		value: "pro",
		label: "Pro",
		image: proImg,
		price: 15,
	},
];

export const ADD_ONS = [
	{
		value: "online",
		label: "Online service",
		desc: "Access to multiplayer games",
		price: 1,
	},
	{
		value: "large",
		label: "Larger storage",
		desc: "Extra 1TB of cloud save",
		price: 2,
	},
	{
		value: "custom",
		label: "Customizable profile",
		desc: "Custom theme on your profile",
		price: 2,
	},
];

export const initialAddOns = {
	online: false,
	large: false,
	custom: false,
};
