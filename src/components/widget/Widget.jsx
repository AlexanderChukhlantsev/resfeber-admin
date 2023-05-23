import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TourIcon from '@mui/icons-material/Tour';
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const { data } = useFetch(`/${type}/countAll`);

  const diff = 20;
	let dataType;
  switch (type) {
    case "users":
      dataType = {
        title: "КОЛ-ВО ЮЗЕРОВ",
        isMoney: false,
        link: "Посмотреть всех",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "places":
      dataType = {
        title: "КОЛ-ВО МЕСТ",
        isMoney: false,
        link: "Посмотреть все",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "excursions":
      dataType = {
        title: "КОЛ-ВО ЭКСКУРСИЙ",
        isMoney: false,
        link: "Посмотреть все",
        icon: (
          <TourIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{dataType.title}</span>
				{data &&
					<span className="counter">
						{dataType.isMoney && "$"} {data.count}
					</span>
				}
				<Link to={`/${type}`} style={{ textDecoration: "none" }}>
        	<span className="link">{dataType.link}</span>
				</Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {dataType.icon}
      </div>
    </div>
  );
};

export default Widget;
