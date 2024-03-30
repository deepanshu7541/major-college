import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import axios from "axios";

import Profile from "../Components/DashboardComponents/Profile";
import Redirect from "../Components/DashboardComponents/Redirect";
import AllQuestions from "../Components/DashboardComponents/AllQuestions";
import NewQuestion from "../Components/DashboardComponents/NewQuestion";
import MyQuestions from "../Components/DashboardComponents/MyQuestions";
import Saved from "../Components/DashboardComponents/Saved";
import Sidebar from "../Components/DashboardComponents/Sidebar";
import Searchbar from "../Components/DashboardComponents/Searchbar";
import Settings from "../Components/DashboardComponents/Settings";
import UserPage from "../Pages/UserPage";
import EditPage from "./EditPage";
import PaginationComponent from "../Components/DashboardComponents/PaginationComponent";
import QuestionPage from "./QuestionPage";
import Menu from "../Components/DashboardComponents/Menu";

import { userObjectContext } from "../Context";

import "../Styles/page-styles/dashboard.css";

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const Dashboard = () => {
	let a = useParams();
	let number = parseInt(a["*"]);
	if (number <= 1) number = 1;
	const [user, isAuthenticated] = useContext(userObjectContext);
	const [questionData, setQuestionData] = useState([]);
	const [myData, setMyData] = useState([]);
	const [savedData, setSavedData] = useState([]);
	const [menu, setMenu] = useState(false);

	const getData = async () => {
		let response = await axios.get(
			api_endpoint + `/question/getQuestions/${number}`,
			{
				withCredentials: true,
			}
		);
		setQuestionData(response.data);
	};

	const myDataFunc = async () => {
		let response = await axios.get(
			api_endpoint + `/question/myQuestions/${user._id}`,
			{
				withCredentials: true,
			}
		);
		setMyData(response.data);
		getData();
	};

	useEffect(() => {
		getData();
	}, [a]);

	const dropDb = async () => {
		let response = await axios.delete(api_endpoint + `/godmode/drop`, {
			withCredentials: true,
		});
		console.log(response);
	};

	if (isAuthenticated === true || isAuthenticated === false) {
		return (
			<>
				{process.env.NODE_ENV === "development" && (
					<button
						style={{
							position: "fixed",
							right: "0",
							top: "0",
							zIndex: 500,
						}}
						onClick={dropDb}
					>
						Drop DB
					</button>
				)}

				<div className="container" id="dashContainer">
					<Searchbar />
					<Sidebar setMenu={setMenu} menu={menu} />
					<Menu menu={menu} setMenu={setMenu} />
					<div className="centerContent">
						<Routes>
							<Route
								exact
								path="/"
								element={<Redirect />}
							></Route>
							<Route
								path="/:id"
								element={
									<>
										<NewQuestion updateFunction={getData} />
										<PaginationComponent
											page="dashboard"
											number={number}
											size={questionData.length}
										/>
										<AllQuestions
											data={questionData}
											getData={getData}
										/>
									</>
								}
							></Route>
							<Route
								exact
								path="/myQuestions"
								element={
									<MyQuestions
										data={myData}
										getData={myDataFunc}
									/>
								}
							></Route>
							<Route
								exact
								path="/saved"
								element={
									<Saved
										data={savedData}
										getData={getData}
										setData={setSavedData}
									/>
								}
							></Route>

							<Route
								exact
								path="/profile"
								element={<Profile />}
							></Route>
							<Route
								exact
								path="/settings"
								element={<Settings />}
							></Route>
							<Route
								exact
								path="/q/:id"
								element={<QuestionPage getData={getData} />}
							></Route>
							<Route
								exact
								path="/edit/:id"
								element={<EditPage getData={getData} />}
							></Route>
							<Route
								exact
								path="/u/:username"
								element={<UserPage getData={getData} />}
							></Route>
						</Routes>
					</div>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default React.memo(Dashboard);
