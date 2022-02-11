import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginLayout } from "../layout/LoginLayout";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Restore } from "../pages/Restore";
import { Path } from "../utils/route";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.LANDING} element={<Landing />} />
        <Route path={Path.FORM} element={<LoginLayout />}>
          <Route path={Path.LOGIN} element={<Login />} />
          <Route path={Path.REGISTER} element={<Register />} />
          <Route path={Path.RESTORE} element={<Restore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
