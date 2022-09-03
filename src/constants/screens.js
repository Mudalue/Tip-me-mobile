import { Welcome } from "../screens/authentication/Welcome/Welcome";
import Login from "../screens/authentication/Login/Login";
import { Registration } from "../screens/authentication/Registration/Registration";
import { Onboarding } from "../screens/dashboard/home/Onboarding";
import Otp from "../screens/authentication/Otp/Otp";
import ResentOtp from "../screens/authentication/Otp/ResentOtp";
export const authscreens = [
  { id: 1, name: "welcome", component: Welcome },
  {
    id: 2,
    name: "onboarding",
    component: Onboarding,
  },
  { id: 3, name: "registration", component: Registration },
  { id: 2, name: "login", component: Login },
  {id: 4, name: "otp-verification", component: Otp},
  {id: 5, name: "resend-otp", component: ResentOtp},
];

export const onboarding = {
  LOGIN: "login",
  REGISTRATION: "registration",
  OTPVERIFICATION: "otp-verification",
  RESENDOTP: "resend-otp"
}