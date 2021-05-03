import Login from "./Login";
import Register from "./Register";

const routes = [
    {name: "Register", path: "/", evkey: "link-1",exact: true, main: () => <Register />},
    {name: "Login", path: "/login", evkey: "link-2",exact: true, main: () => <Login />}
];
export default routes