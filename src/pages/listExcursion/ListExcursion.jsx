import "./listExcursion.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableExcursion from "../../components/datatableExcursion/DatatableExcursion"

const ListExcursion = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableExcursion columns={columns}/>
      </div>
    </div>
  )
}

export default ListExcursion;