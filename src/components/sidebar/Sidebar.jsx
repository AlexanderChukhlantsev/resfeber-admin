import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
	const {dispatch: authDispatch} = useContext(AuthContext);
	const handleClick = async e => {
		e.preventDefault()
		authDispatch({type: "LOGOUT"});
	};
  const { dispatch: darkModeDispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Resfeber</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">СТАТИСТИКА</p>
          <li>
            <DashboardIcon className="icon" />
						<Link to="/" style={{ textDecoration: "none" }}>
            	<span>Панель статистики</span>
						</Link>
          </li>
          <p className="title">СПИСКИ</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Пользователи</span>
            </li>
          </Link>
          <Link to="/places" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Места</span>
            </li>
          </Link>
					<Link to="/excursions" style={{ textDecoration: "none" }}>
						<li>
							<CreditCardIcon className="icon" />
							<span>Экскурсии</span>
						</li>
					</Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">ПОЛЕЗНОЕ</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Подбор статистики</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Уведомления</span>
          </li>
          <p className="title">СЕРВИС</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Здоровье системы</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Логи</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Настройки</span>
          </li>
          <p className="title">ПОЛЬЗОВАТЕЛЬ</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Профиль</span>
          </li>
          <li onClick={handleClick}>
            <ExitToAppIcon className="icon" />
            <span>Выйти</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
