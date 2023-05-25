import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";
import moment from 'moment';
import 'moment/locale/ru';

const List = () => {
	moment.locale('ru');
	const { data } = useFetch("/excursions/getExcursionData");
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
						<TableCell className="tableCell">id места</TableCell>
            <TableCell className="tableCell">Место</TableCell>
						<TableCell className="tableCell">id экурсии</TableCell>
            <TableCell className="tableCell">Экурсия</TableCell>
            <TableCell className="tableCell">Занятые даты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow>
							<TableCell className="tableCell tableItem">{data.placeId}</TableCell>
              <TableCell className="tableCell tableItem">{data.placeName}</TableCell>
							<TableCell className="tableCell tableItem">{data.excursionId}</TableCell>
              <TableCell className="tableCell tableItem">{data.excursionTitle}</TableCell>
							<TableCell className="tableCell tableItem">
								{data.unavailableDates.map((date) => (
									// <div key={date}>{moment(date).format('LLLL')}</div>
									<div key={date}>{moment.utc(date).utcOffset(180).format('LLLL')}</div>
								))}
							</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
