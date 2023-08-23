import { Button, Form, Input, Typography, notification } from "antd";
import { useLoginMutation } from "../../../generated/schemas";
import { useNavigate } from "react-router-dom";
import { PATH_URL } from "../../ultils/constant";
import FieldInput from "./FieldInput";

const { Text } = Typography;

const FieldList = [
  {
    messageError: "Please input your username",
    name: "username",
    placeHolder: "What is your username",
  },
  {
    messageError: "Please input your password",
    name: "password",
    placeHolder: "What is your password",
  },
];

interface LoginFormProps {
  username: string;
  password: string;
}

function AuthenticationForm() {
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation({
    onCompleted(data) {
      if (data.login?.status === "200") {
        navigate(PATH_URL.dashBoard);
        notification.success({
          message: "Login successful",
          description: "Welcome to your Dashboard",
        });
      }
    },
  });

  const onLogin = (values: LoginFormProps) => {
    loginMutation({
      variables: {
        userInfo: values,
      },
    });
  };

  return (
    <div className="p-20 bg-[#f9f6f6] flex justify-center">
      <div className="w-1/4 bg-white py-4 px-8 rounded-lg flex justify-center space-y-2 flex-col">
        <h1 className="text-center text-xl">ĐĂNG NHẬP</h1>
        <Text className="text-center pb-6 text-base">
          Nếu bạn chưa có tài khoản, đăng ký tại đây
        </Text>
        <Form onFinish={onLogin}>
          {FieldList.map((field) => (
            <FieldInput
              key={field.name}
              messageError={field.messageError}
              name={field.name}
              placeHolder={field.placeHolder}
            />
          ))}
          <div className="flex flex-col items-center space-y-2 text-center">
            <Button
              className="w-full bg-primary-green-color text-white"
              htmlType="submit"
              size="large"
            >
              Đăng nhập
            </Button>
            <a className="text-center">Quên mật khẩu?</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AuthenticationForm;
