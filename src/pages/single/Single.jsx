import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import React from "react";

const Single = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const pathForId = location.pathname.split("/")[2];
  const { data: locId } = useFetch(`/${path}/${pathForId}`);
	const { data: placeFound } = useFetch(`/${path}/find/${pathForId}`);
	const { data: getPlaceIds } = useFetch(`/${path}/getPlaceIds/${pathForId}`);

  const renderData = () => {
    if (path === "users") {
      return (
				<>
					<img
					src={locId.img || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg"}
					alt=""
					className="itemImg"
					/>
					<div className="details">
						<h1 className="itemTitle">{locId.username}</h1>
						<div className="detailItem">
							<span className="itemKey">id:</span>
							<span className="itemValue">{locId._id}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Почта:</span>
							<span className="itemValue">{locId.email}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Страна:</span>
							<span className="itemValue">{locId.country}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Страна:</span>
							<span className="itemValue">{locId.country}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Город:</span>
							<span className="itemValue">{locId.city}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Телефон:</span>
							<span className="itemValue">{locId.phone}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Администратор?</span>
							<span className="itemValue">{locId.isAdmin ? "Да" : "Нет"}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Дата регистрации:</span>
							<span className="itemValue">{locId.createdAt}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Дата редактирования профиля:</span>
							<span className="itemValue">{locId.updatedAt}</span>
						</div>
					</div>
				</>
      );
    } else if (path === "places") {
      return (
				<>
					<img
						src={placeFound.photos && placeFound.photos.length > 0 ? placeFound.photos[0] : "https://rozetki.net/upload/no-photo/no-photo.png"}
						alt=""
						className="itemImg"
					/>
					<div className="details">
						<h1 className="itemTitle">{placeFound.name}</h1>
						<div className="detailItem">
							<span className="itemKey">id:</span>
							<span className="itemValue">{placeFound._id}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Тип:</span>
							<span className="itemValue">{placeFound.type}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Город:</span>
							<span className="itemValue">{placeFound.city}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Адресс:</span>
							<span className="itemValue">{placeFound.address}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Дистанция от центра:</span>
							<span className="itemValue">{placeFound.distance}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Заголовок описания:</span>
							<span className="itemValue">{placeFound.title}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Описание:</span>
							<span className="itemValue">{placeFound.desc}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Рейтинг:</span>
							<span className="itemValue">{placeFound.rating}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Описание рейтинга:</span>
							<span className="itemValue">{placeFound.ratingDesc}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Экскурсии id:</span>
							<span className="itemValue"> 
								{/* здесь конструкция для вывода idшников с новой строчки */}
								{placeFound.excursion && placeFound.excursion.length > 0 ? (
									placeFound.excursion.map((word, index) => (
										<div key={index}>{word}</div>
									))
								) : (
									<div>Экскурсий нету</div>
								)}
							</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Самая дешевая экскурсия:</span>
							<span className="itemValue">{placeFound.cheapestPrice}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Рекомендованное?</span>
							<span className="itemValue">{placeFound.featured ? "Да" : "Нет"}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Cоздано:</span>
							<span className="itemValue">
								{placeFound.hasOwnProperty('createdAt') ? placeFound.createdAt : "Нету информации"}
							</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Обновлено:</span>
							<span className="itemValue">
								{placeFound.hasOwnProperty('createdAt') ? placeFound.updatedAt : "Нету информации"}
							</span>
						</div>
					</div>
				</>
      );
    } else if (path === "excursions") {
      return (
				<>
					<div className="details">
						<h1 className="itemTitle">{locId.title}</h1>
						<div className="detailItem">
							<span className="itemKey">id:</span>
							<span className="itemValue">{locId._id}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Описание:</span>
							<span className="itemValue">{locId.desc}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Цена:</span>
							<span className="itemValue">{locId.price}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Максимум человек:</span>
							<span className="itemValue">{locId.maxPeople}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Занятые даты:</span>
							<span className="itemValue">
								{/* конструкция для вывода id с новой строчки */}
								{locId.excursionNumbers && locId.excursionNumbers.length > 0
									? locId.excursionNumbers[0].unavailableDates && locId.excursionNumbers[0].unavailableDates.length > 0
										? locId.excursionNumbers[0].unavailableDates.map(date => <React.Fragment key={date}>{date}<br /></React.Fragment>)
										: "Нету занятых дат"
									: "Нету занятых дат"}
							</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">id тур. места к которому прикреплена экскурсия:</span>
							<span className="itemValue">{getPlaceIds.placeIds}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Cоздано:</span>
							<span className="itemValue">{locId.createdAt}</span>
						</div>
						<div className="detailItem">
							<span className="itemKey">Обновлено:</span>
							<span className="itemValue">{locId.updatedAt}</span>
						</div>
					</div>
				</>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="single">
      <Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<Link to={`/${path}/edit/${pathForId}`} style={{ textDecoration: "none" }}>
							<div className="editButton">Редактировать</div>
						</Link>
            <h1 className="title">Информация</h1>
						<div className="item">
							{renderData()} {/* Вызов функции для вывода информации */}
						</div>
					</div>
				</div>
			</div>
    </div>
  );
};

export default Single;
