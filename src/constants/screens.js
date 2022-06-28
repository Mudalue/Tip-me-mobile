import { Welcome } from "../screens/authentication/Welcome.jsx";
import Login from "../screens/authentication/Login.jsx";
import { Registration } from "../screens/authentication/Registration.jsx";
import { Onboarding } from "../screens/authentication/Onboarding.jsx";
export const authscreens = [
  { id: 1, name: "welcome", component: Welcome },
  {
    id: 2,
    name: "onboarding",
    component: Onboarding,
  },
  { id: 3, name: "registration", component: Registration },
  { id: 2, name: "login", component: Login },
];
