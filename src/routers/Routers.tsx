import React from "react";
import { AuthRouter } from "./AuthRouter";
import { MainRouter } from "./MainRouter";

export const Routers = () => {
  return 1 < 2 ? <AuthRouter /> : <MainRouter />;
};
