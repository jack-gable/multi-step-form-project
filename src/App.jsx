import "./App.css";
import SignupForm from "./components/SignupForm";
import MobileSignUpForm from "./components/MobileSignUpForm";
import { useMediaQuery } from "react-responsive";

function App() {
	const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
	const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 550px)" });
	return (
		<>
			{isTabletOrDesktop && (
				<div className="container">
					<SignupForm />
				</div>
			)}
			{isMobile && <MobileSignUpForm />}
		</>
	);
}

export default App;
