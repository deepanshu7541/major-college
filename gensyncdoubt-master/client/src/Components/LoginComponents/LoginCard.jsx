import React, { useEffect, useState } from "react";
import Input from "../DashboardComponents/Input";
import LoginButtons from "./LoginButtons";
import "../../Styles/page-styles/login.css";
import axios from "axios";
import validator from "validator";
import { Navigate } from "react-router-dom";
import { UilGoogle } from "@iconscout/react-unicons";

import { UilEnvelope } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const LoginCard = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const [localAuth, setLocalAuth] = useState(null);
	const [localSignUp, setLocalSignUp] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const submitLogin = () => {
		var validateEmail = email;
		if (validator.isEmail(validateEmail)) {
			axios({
				method: "POST",
				data: {
					username: email,
					password: password,
				},
				withCredentials: true,
				url: api_endpoint + "/user/auth/local",
			}).then((response) => setLocalAuth(response.data));
		} else {
			setErrorMessage("Enter valid Email!");
		}
	};

	const submitSignUp = () => {
		var validateEmail = email;
		if (validator.isEmail(validateEmail)) {
			if (password === rePassword && password !== "") {
				axios
					.post(api_endpoint + "/user/signup", {
						username: email,
						password: password,
					})
					.then((response) => setLocalSignUp(response.data));
			} else {
				setErrorMessage("Password Mismatch!");
			}
		} else {
			setErrorMessage("Enter valid Email!");
		}
	};

	useEffect(() => {
		if (localSignUp === "New User Created") {
			window.open("/login", "_self");
		} else if (localSignUp === "User Already Exists") {
			setErrorMessage("User Already Exists");
		} else {
		}
	}, [localSignUp]);

	useEffect(() => {
		if (localAuth === true) {
			window.open("/dashboard/1", "_self");
		} else if (localAuth === false) {
			setErrorMessage("Incorrect Credentials");
			setPassword("");
		} else {
		}
	}, [localAuth]);

	return (
		<div className="cardComponent loginComponent">
			<form className="form" action="">
				<div className="heading">
					{props.heading}
					<span className="errorMessage">{errorMessage}</span>
				</div>
				<Input
					heading="Email"
					type="email"
					placeholder="Enter Email"
					update={setEmail}
				>
					<UilEnvelope color="#A0A3BD" />
				</Input>

				<Input
					heading="Password"
					type="password"
					placeholder="Enter Password"
					update={setPassword}
				>
					<UilEyeSlash color="#A0A3BD" />
				</Input>

				{props.page === "login" ? (
					<LoginButtons submit={submitLogin} />
				) : (
					<div className="centerSignUp">
						<Input
							heading="Re-enter Password"
							type="password"
							placeholder="Re-enter Password"
							update={setRePassword}
						>
							<UilEyeSlash color="#A0A3BD" />
						</Input>

						<button
							type="button"
							className="button"
							style={{ marginTop: "10px" }}
							onClick={submitSignUp}
						>
							Sign Up
							</button>
							<div className="orStyle">OR</div>
						<div className="registerOptions">
							<a
								href={api_endpoint + "/user/auth/google"}
								className="button button-full button2"
							>
								<UilGoogle size={24} />
								&nbsp; Sign In With google
							</a>

							<button
								type="button"
								className="button button2"
								onClick={() => window.open("/login", "_self")}
							>
								Log In
							</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default React.memo(LoginCard);
