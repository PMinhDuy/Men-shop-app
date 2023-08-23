import { Form, Input } from "antd";

interface FieldInputProps {
  messageError: string;
  name: string;
  placeHolder: string;
}

const FieldInput = ({ messageError, name, placeHolder }: FieldInputProps) => (
  <Form.Item
    className="text-center"
    name={name}
    rules={[{ required: true, message: messageError }]}
  >
    <Input
      bordered={false}
      className="px-3 py-2 bg-gray-100"
      placeholder={placeHolder}
    />
  </Form.Item>
);

export default FieldInput;
