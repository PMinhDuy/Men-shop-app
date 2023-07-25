import { store } from "./store";

export type CounterState = {
  counter: {
    value: number;
  };
};

export type UserState = {
  user: {
    email: string;
    userName: string;
    password: string;
  };
};

export type TestReduxState = {
  testRedux: {
    ability: string;
    berry: string;
  };
};

export type RootState = ReturnType<typeof store.getState>;
