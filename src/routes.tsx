import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Experiencia from "./views/experiencia";
import Pessoais from "./views/pessoais";
import Final from "./views/final";
import Agradecimento from "./views/agradecimento";

const NewRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={< Pessoais />} path="/" />
                <Route element={< Experiencia />} path="experiencia" />
                <Route element={< Final />} path="final" />
                <Route element={< Agradecimento />} path="agradecimento" />
            </Routes>
        </BrowserRouter>
    )
}

export default NewRoutes;