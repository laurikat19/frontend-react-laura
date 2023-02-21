import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

const GeneralRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Dashboard />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
};

export default GeneralRoutes;