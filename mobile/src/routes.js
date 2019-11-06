import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import UserSignIn from "./pages/UserSignIn";
import UserRegister from "./pages/UserRegister";
import UserResetPassword from "./pages/UserResetPassword";
import UserProfile from "./pages/UserProfile";

const Routes = createAppContainer(
  createStackNavigator({
    UserSignIn,
    UserRegister,
    UserResetPassword,
    UserProfile
  })
);

export default Routes;
