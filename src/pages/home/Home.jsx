import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="places" />
          <Widget type="excursions" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Последнии 6 месяцев (Кол-во заявок)" aspect={3 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Заявки</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
