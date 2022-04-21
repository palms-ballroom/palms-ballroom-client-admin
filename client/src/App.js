import "./App.css";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import BallroomTable from "./components/BallroomTable";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterAdmin from "./components/RegisterAdmin";
import { RequireAuthHome, RequireAuthLogin } from "./components/RequireAuth";
import "./assets/styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={
            <RequireAuthLogin>
              <LoginPage />
            </RequireAuthLogin>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuthHome>
              <HomePage />
            </RequireAuthHome>
          }
        >
          <Route path="" element={<BallroomTable />} />
          <Route path="add-form" element={<AddForm />} />
          <Route path="edit-form/:id" element={<EditForm />} />
          <Route path="register-admin" element={<RegisterAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
