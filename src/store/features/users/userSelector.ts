import { UserState } from "../rootType";

const userNameSelector = (state: UserState) => state.user.userName;
const emailSelector = (state: UserState) => state.user.email;
const passwordSelector = (state: UserState) => state.user.password;

export { userNameSelector, emailSelector, passwordSelector };
