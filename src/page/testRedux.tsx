import { useDispatch, useSelector } from "react-redux";
import counterSelector from "../store/features/counter/counterSelector";
import { Button } from "antd";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../store/features/counter/counterSlice";
import {
  userNameSelector,
  emailSelector,
  passwordSelector,
} from "../store/features/users/userSelector";

function TestRedux() {
  const count = useSelector(counterSelector);
  const userName = useSelector(userNameSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React Redux</h1>
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(2))}>
        Increment By Amount
      </Button>
      <Button onClick={() => dispatch(decrementByAmount(2))}>
        Decrement By Amount
      </Button>

      <h2>User Information</h2>
      <p>Username: {userName}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
    </>
  );
}

export default TestRedux;
