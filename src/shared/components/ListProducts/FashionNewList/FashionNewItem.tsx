import { Image, Typography, Divider } from "antd";
import { FashionNew } from "../../../../generated/schemas";
import { UserOutlined, FieldTimeOutlined } from "@ant-design/icons";

function FashionNewItemComponent(fashionNew: FashionNew) {
  return (
    <div className="w-full">
      <div>
        <Image
          width={350}
          className="rounded-xl"
          src={fashionNew.avatar || ""}
          preview={false}
        />
      </div>
      <Typography.Text className="text-lg font-bold hover:text-primary-yellow-color cursor-pointer">
        {fashionNew.title}
      </Typography.Text>
      <div className="text-[#808080] flex items-center">
        <span className="flex items-center space-x-2">
          <UserOutlined />
          <Typography.Text className="text-[#808080]">
            {fashionNew.authorName}
          </Typography.Text>
        </span>
        <Divider type="vertical" className="text-black" />
        <span className="flex items-center space-x-2">
          <FieldTimeOutlined />
          <Typography.Text className="text-[#808080]">
            Ngày {fashionNew.createdAt}
          </Typography.Text>
        </span>
      </div>
      <p className="max-w-[350px] text-[#656565]">{fashionNew.content}</p>
    </div>
  );
}

export default FashionNewItemComponent;
