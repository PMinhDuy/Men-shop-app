import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Result
      status="404"
      subTitle="Sorry, the page you visited does not exist."
      title="404"
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default NotFoundPage;
