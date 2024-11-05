import { Layout } from "antd";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderComponent, SiderComponent } from "../components";
import {
  Inventories,
  ManageStore,
  Orders,
  ReportScreen,
  Suppliers,
} from "../screens";
import { HomeScreen } from "../screens/HomeScreen";

const { Content, Footer } = Layout;

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content className="mt-3 mb-2 container bg-white">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/inventory" element={<Inventories />} />
              <Route path="/report" element={<ReportScreen />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/manager-store" element={<ManageStore />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
