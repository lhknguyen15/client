import { Avatar, Button, Input, Space } from "antd";
import { Notification, SearchNormal1 } from "iconsax-react";
import { colors } from "../constants/colors";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          placeholder="Search product, supplier, order"
          style={{
            width: "50%",
          }}
          size="large"
          prefix={<SearchNormal1 className="text-muted" size={20} />}
        ></Input>
      </div>
      <div className="col" style={{ textAlign: "right" }}>
        <Space>
          <Button
            type="text"
            icon={<Notification size={22} color={colors.gray600} />}
          />
          <Avatar
            src={
              "https://hobiverse.com.vn/cdn/shop/articles/one-piece-vet-seo-cua-luffy_thumbnail.png?v=1724172678"
            }
            size={40}
          />
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;
