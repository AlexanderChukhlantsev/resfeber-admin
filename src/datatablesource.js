export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "country",
    headerName: "Страна",
    width: 100,
  },
	{
    field: "city",
    headerName: "Город",
    width: 100,
  },
	{
    field: "phone",
    headerName: "Телефон",
    width: 150,
  },
];

export const placeColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Название",
    width: 300,
  },
  {
    field: "type",
    headerName: "Тип",
    width: 200,
  },
  // {
  //   field: "title",
  //   headerName: "Title",
  //   width: 230,
  // },
  {
    field: "city",
    headerName: "Город",
    width: 150,
  },
];

export const excursionColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Название",
    width: 300,
  },
  {
    field: "desc",
    headerName: "Описание",
    width: 300,
  },
  {
    field: "price",
    headerName: "Цена",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Макс. людей",
    width: 100,
  },
];