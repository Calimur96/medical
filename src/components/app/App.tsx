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
    Main,
    Location,
    Entries,
    Account,
    Search,
    ClinicInformatiom,
} from "../../pages";

function App() {
    return (
        <Routes>
            <Route path={ROUTES.main} element={<Main />} />
            <Route path={ROUTES.error} element={<div>404</div>} />
            <Route path={ROUTES.registration} element={<RegistrationPage />} />
            <Route path={ROUTES.confirm} element={<MailConfirm />} />
            <Route path={ROUTES.login} element={<SignIn />} />
            <Route path={ROUTES.forgotPass} element={<ForgotPass />} />
            <Route path={ROUTES.newPass} element={<CreateNewPass />} />
            <Route path={ROUTES.map} element={<Map />} />
            <Route path={ROUTES.location} element={<Location />} />
            <Route path={ROUTES.entries} element={<Entries />} />
            <Route path={ROUTES.account} element={<Account />} />
            <Route path={ROUTES.search} element={<Search />} />
            <Route
                path={ROUTES.clinicInformation}
                element={<ClinicInformatiom />}
            />
        </Routes>
    );
}

export default App;
