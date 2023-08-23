import { Button, Form, Input, Typography, notification } from "antd";
import { useLoginMutation } from "../../../generated/schemas";
import { useNavigate } from "react-router-dom";
import { PATH_URL } from "../../ultils/constant";

const { Text } = Typography;

const FieldList = [
  {
    messageError: "Please input your last name",
    name: "lastname",
    placeHolder: "What is your last name?",
  },
  {
    messageError: "Please input your first name",
    name: "firstname",
    placeHolder: "What is your first name?",
  },
];

interface FieldItemProps {
  firstName: string;
  lastName: string;
  email: string;
  numberPhone: string;
  password: string;
}

function RegisterForm() {
  const navigate = useNavigate();
  //   const [loginMutation] = useLoginMutation({
  //     onCompleted(data) {
  //       if (data.login?.status === "200") {
  //         navigate(PATH_URL.dashBoard);
  //         notification.success({
  //           message: "Login successful",
  //           description: "Welcome to your Dashboard",
  //         });
  //       }
  //     },
  //   });

  const onLogin = (values: FieldItemProps) => {
    //   loginMutation({
    //     variables: {
    //       userInfo: values,
    //     },
    //   });
  };

  return (
    <div className="p-20 bg-[#f9f6f6] flex justify-center">
      <div className="w-1/4 bg-white py-4 px-8 rounded-lg flex justify-center space-y-2 flex-col">
        <h1 className="text-center text-xl">ĐĂNG KÝ</h1>
        <Text className="text-center pb-6 text-base">
          Nếu bạn chưa có tài khoản, đăng ký tại đây
        </Text>
        <Form onFinish={onLogin}>
          <Form.Item
            className="text-center"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input
              bordered={false}
              className="px-3 py-2 bg-gray-100"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            className="text-center"
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              bordered={false}
              className="px-3 py-2 bg-gray-100"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Button
              className="w-full bg-primary-green-color text-white"
              htmlType="submit"
              size="large"
            >
              Đăng ký
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
