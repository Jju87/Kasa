import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// Import des pages
import Home from "./pages/Home/Home";
import APropos from "./pages/A-propos/A-propos";
import Error from "./pages/Error/Error";
import FicheLogement from "./pages/Fiche-Logement/Fiche-Logement";
// Import de la fonctionnalité de routage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import des composants du layout
import Header from "./layout/Header/Header";
import "../src/styles/main.scss";
import Footer from "./layout/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route
                        path="/fiche-logement/:id"
                        element={<FicheLogement />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
