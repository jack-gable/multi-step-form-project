import styles from "./ThankYou.module.css";
import ThankYouImage from "../../assets/images/icon-thank-you.svg";

function ThankYou() {
	return (
		<div className={styles.wrapper}>
			<img src={ThankYouImage} alt="" />
			<h1>Thank You!</h1>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
}

export default ThankYou;
