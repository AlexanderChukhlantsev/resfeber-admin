import useFetch from "../../hooks/useFetch";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Chart = ({ aspect, title }) => {
	const { data: unavailableDatesData } = useFetch("/excursions/countUnavailableDates");
	const data = [
		{ name: "Декабрь", Total: (unavailableDatesData.count + 5) },
		{ name: "Январь", Total: (unavailableDatesData.count + 3) },
		{ name: "Февраль", Total: unavailableDatesData.count },
		{ name: "Март", Total: (unavailableDatesData.count - 1) },
		{ name: "Апрель", Total: unavailableDatesData.count },
		{ name: "Май", Total: unavailableDatesData.count },
	];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
