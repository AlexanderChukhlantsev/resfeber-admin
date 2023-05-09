import "./datatableExcursion.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import axios from "axios";

const DatatableExcursion = ({columns}) => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const [list, setList] = useState([]);
	const {data, loading, error} = useFetch(`/${path}`);

	useEffect(() => {
		setList(data)
	},[data])
  const handleDelete = async (id) => {
		try {
			await axios.delete(`/${path}/${id}`);
			setList(list.filter((item) => item._id !== id));
		} catch (err) {
			console.log(err);
		}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Действия",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Просмотр</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Удалить
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Редактирование списка {path}
        <Link to={`/${path}/new`} className="link">
          Добавить
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
				getRowId={row => row._id}
      />
    </div>
  );
};

export default DatatableExcursion;
