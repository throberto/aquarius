import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Navigation from "./pages/Navigation";
import UserSignIn from "./pages/UserSignIn";
import UserRegister from "./pages/UserRegister";
import UserResetPassword from "./pages/UserResetPassword";
import UserProfile from "./pages/UserProfile";
import About from "./pages/About";
import AquariumDetails from "./pages/AquariumDetails";
import AquariumRegister from "./pages/AquariumRegister";
import FishList from "./pages/FishList";

import Home from "./pages/Home";
import ReminderList from "./pages/ReminderList";
import ReminderRegister from "./pages/ReminderRegister";

const HomeDrawer = createAppContainer(
  createDrawerNavigator({
    Home,
    UserProfile,
    AquariumRegister,
    About,
    AquariumDetails,
    AquariumRegister,
    FishList,

    ReminderList,
    ReminderRegister
  })
);

const Routes = createAppContainer(
  createStackNavigator({
    UserSignIn
    //HomeDrawer
  })
);

export default Routes;
