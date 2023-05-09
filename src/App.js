import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { excursionInputs, placeInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { excursionColumns, placeColumns, userColumns } from "./datatablesource";
import NewPlace from "./pages/newPlace/NewPlace";
import NewExcursion from "./pages/newExcursion/NewExcursion"

function App() {
  const { darkMode } = useContext(DarkModeContext);
	const ProtectedRoute = ({children}) => {
		const {user} = useContext(AuthContext);
		if (!user) {
			return <Navigate to="/login"/>;
		} 
		return children;
	}
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><New inputs={userInputs} title="Добавить пользователя" /></ProtectedRoute>}
              />
            </Route>
            <Route path="places">
              <Route index element={<ProtectedRoute><List columns={placeColumns}/></ProtectedRoute>} />
              <Route path=":placeId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><NewPlace /></ProtectedRoute>}
              />
            </Route>
						<Route path="excursions">
              <Route index element={<ProtectedRoute><List columns={excursionColumns}/></ProtectedRoute>} />
              <Route path=":excursionId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><NewExcursion /></ProtectedRoute>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
