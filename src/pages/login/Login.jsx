import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import axios from "axios";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const {loading, error, dispatch} = useContext(AuthContext);
	const navigate = useNavigate()
	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async e => {
		e.preventDefault()
		dispatch({type: "LOGIN_START"});
		try {
			const res = await axios.post("auth/login", credentials);
			if (res.data.isAdmin) {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
				navigate("/");
			} else {
				dispatch({ type: "LOGIN_FAILURE", payload: {message: "Вы не администратор!"} });
			}
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return <div className="login">
		<div className="lContainer">
			<input 
				type="text" 
				placeholder="имя пользователя" 
				id="username" 
				onChange={handleChange} 
				className="lInput" 
			/>
			<input
				type="password" 
				placeholder="пароль" 
				id="password" 
				onChange={handleChange} 
				className="lInput" 
			/>
			<button disabled={loading} onClick={handleClick} className="lButton">Авторизоваться</button>
			{error && <div className="errMessage">{error.message}</div>}
		</div>
	</div>;
};

export default Login;