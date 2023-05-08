import "./App.scss";
import { Route, Routes } from "react-router-dom";

import ROUTES from "../../routes/routes";
import {
    RegistrationPage,
    MailConfirm,
    SignIn,
    ForgotPass,
    CreateNewPass,
    Map,
} from "../../pages";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.main} element={<div>Home</div>} />
            <Route path={ROUTES.error} element={<div>404</div>} />
            <Route path={ROUTES.registration} element={<RegistrationPage />} />
            <Route path={ROUTES.confirm} element={<MailConfirm />} />
            <Route path={ROUTES.login} element={<SignIn />} />
            <Route path={ROUTES.forgotPass} element={<ForgotPass />} />
            <Route path={ROUTES.newPass} element={<CreateNewPass />} />
            <Route path={ROUTES.map} element={<Map />} />
        </Routes>
    );
}

export default App;
