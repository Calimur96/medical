import "./App.scss";
import { Route, Routes } from "react-router-dom";

import ROUTES from "../../routes/routes";
import { RegistrationPage } from "../../pages";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.main} element={<div>Home</div>} />
            <Route path={ROUTES.error} element={<div>404</div>} />
            <Route path={ROUTES.registration} element={<RegistrationPage />} />
        </Routes>
    );
}

export default App;
