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
import { abilitySelector } from "../store/features/testRedux/testReduxSelector";
import { useEffect } from "react";
import { testReduxAction } from "../store/features/testRedux/testReduxSlice";

function TestRedux() {
  const count = useSelector(counterSelector);
  const userName = useSelector(userNameSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const ability = useSelector(abilitySelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testReduxAction.loadTestReduxDataInitial());
  }, []);
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

      <Button
        onClick={() => dispatch(testReduxAction.loadTestReduxDataInitial())}
      >
        Load Test Redux
      </Button>

      <h2>User Information</h2>
      <p>Username: {userName}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
      <br />
      <p>ability Redux: {ability}</p>
    </>
  );
}

export default TestRedux;
