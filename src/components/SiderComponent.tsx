import { Layout, Menu, MenuProps, Typography } from "antd";
import { Box, Chart, Home2, ProfileCircle } from "iconsax-react";
import { CiViewList } from "react-icons/ci";
import { MdOutlineInventory2 } from "react-icons/md";
import { Link } from "react-router-dom";
import { appInfo } from "../constants/appInfos";
import { colors } from "../constants/colors";

const { Sider } = Layout;
const { Text } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

const SiderComponent = () => {
  const items: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link to={"/"}>Dashboard</Link>,
      icon: <Home2 size={20} />,
    },
    {
      key: "inventory",
      label: <Link to={"/inventory"}>Inventory</Link>,
      icon: <MdOutlineInventory2 size={20} />,
    },
    {
      key: "Report",
      label: <Link to={"/report"}>Report</Link>,
      icon: <Chart size={20} />,
    },
    {
      key: "Suppliers",
      label: <Link to={"/suppliers"}>Suppliers</Link>,
      icon: <ProfileCircle size={20} />,
    },
    {
      key: "Orders",
      label: <Link to={"/orders"}>Orders</Link>,
      icon: <Box size={20} />,
    },
    {
      key: "Manager Store",
      label: <Link to={"/manager-store"}>Manager Store</Link>,
      icon: <CiViewList size={20} />,
    },
  ];
  return (
    <Sider theme="light" style={{ height: "100vh" }}>
      <div className="d-flex align-items-center p-2">
        <img src={appInfo.logo} alt="" width={48} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: colors.primay500,
            margin: 0,
          }}
        >
          {appInfo.title}
        </Text>
      </div>
      <Menu items={items} theme="light" />
    </Sider>
  );
};

export default SiderComponent;
