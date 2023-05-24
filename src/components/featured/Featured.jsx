import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
	const { data: unavailableDatesData, loading: unavailableDatesLoading } = useFetch("/excursions/countUnavailableDates");
	const { data: occupancyPercentageData} = useFetch("/excursions/occupancyPercentage");
  return (
    <div className="featured">
			{unavailableDatesLoading ? (
			"Загрузка, пожалуйста подождите" 
			) : (
				<>
					<div className="top">
						<h1 className="title">Общее кол-во заявок</h1>
						<MoreVertIcon fontSize="small" />
					</div>
					<div className="bottom">
						<p className="title">Уровень заполнености</p>
						<div className="featuredChart">
							<CircularProgressbar value={occupancyPercentageData.occupancyPercentage} text={`${occupancyPercentageData.occupancyPercentage}%`} strokeWidth={5} />
						</div>
						<p className="title">Кол-во заявок</p>
							<p className="amount">{unavailableDatesData.count}</p>
						<p className="desc">
							Обработка заявок может занимать время. Последнии заявки могут не отображаться. <br />
							Уровень заполнености означает, на сколько, в процентах, заполнены экскурсии людьми.
						</p>
					</div>
				</>
			)}
    </div>
  );
};

export default Featured;
