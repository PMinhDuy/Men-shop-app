import { Button, Form, Input, Typography, notification } from 'antd';
import { useLoginMutation } from '../../../generated/schemas';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../ultils/constant';

const { Text } = Typography;

interface LoginFormProps {
  username: string;
  password: string;
}

function AuthenticationForm() {
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation({
    onCompleted(data) {
      if (data.login?.status === '200') {
        navigate(PATH_URL.dashBoard);
        notification.success({
          message: 'Login successful',
          description: 'Welcome to your Dashboard',
        });
      }
    },
  });

  const onLogin = async (values: LoginFormProps) => {
    await loginMutation({
      variables: {
        userInfo: values,
      },
    });
  };

  return (
    <div className="p-20 bg-[#f9f6f6] flex justify-center">
      <div className="w-1/4 bg-white py-4 px-8 rounded-lg flex justify-center space-y-2 flex-col">
        <h1 className="text-center text-xl">ĐĂNG NHẬP</h1>
        <Text className="text-center pb-6 text-base">Nếu bạn chưa có tài khoản, đăng ký tại đây</Text>
        <Form onFinish={() => onLogin}>
          <Form.Item
            className="text-center"
            name="username"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input bordered={false} className="px-3 py-2 bg-gray-100" placeholder="Email" />
          </Form.Item>
          <Form.Item
            className="text-center"
            name="password"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input bordered={false} className="px-3 py-2 bg-gray-100" placeholder="Mật khẩu" />
          </Form.Item>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Button className="w-full bg-primary-green-color text-white" htmlType="submit" size="large">
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
