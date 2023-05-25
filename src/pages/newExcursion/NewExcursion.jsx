import "./newExcursion.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { excursionInputs } from "../../formSource.js";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewExcursion = () => {
  const [info, setInfo] = useState({});
  const [placeId, setPlaceId] = useState(undefined);
  const [excursions, setExcursions] = useState([]);
	const navigate = useNavigate();
  const { data, loading, error } = useFetch("/places");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const excursionNumbers = excursions.split(",").map((excursion) => ({ number: excursion }));
    try {
      await axios.post(`/excursions/${placeId}`, { ...info, excursionNumbers });
			navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Добавить новую экскурсию</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {excursionInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Номер экскурсии</label>
                <textarea
                  onChange={(e) => setExcursions(e.target.value)}
                  placeholder="введи номер экскурсии у тур. места"
                />
              </div>
              <div className="formInput">
                <label>Выберите место</label>
                <select
                  id="placeId"
                  onChange={(e) => setPlaceId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((place) => (
                        <option key={place._id} value={place._id}>{place.name}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewExcursion;
