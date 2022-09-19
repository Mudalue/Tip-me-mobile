import { Welcome } from "../screens/authentication/Welcome/Welcome";
import Login from "../screens/authentication/Login/Login";
import { Registration } from "../screens/authentication/Registration/Registration";
import { Onboarding } from "../screens/dashboard/home/Onboarding";
import Otp from "../screens/authentication/Otp/Otp";
import ResentOtp from "../screens/authentication/Otp/ResentOtp";
import DashboardStackNavigation from "../navigation/dashboard/DashboardStackNavigation";
import TransactionStackNavigation from "../navigation/transaction/TransactionStackNavigation";
import Settings from "../screens/dashboard/setting/Settings";
import Transactions from "../screens/dashboard/transactions/Transactions";
import Scan from "../screens/dashboard/home/Scan";
import Qrcode from "../screens/dashboard/home/Qrcode";

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

export const TabScreenNavStack = {
  DASHBOARD: 'Home',
  SETTING: 'Setting',
  TRANSACTIONS: 'Transactions',
}
export const DashboardScreenTitles = {
  DASHBOARD: 'DashboardHome',
  DASHBOARD_RECEIVED: 'dashboard_received',
  SCAN: "scan",
  QRCODE: "qrcodescan"
}
export const TranxScreenTitles = {
  HOME: 'TransactionHome',
}
// bottom tab navigation options
export const TabScreenOptions = [
  {
    name: TabScreenNavStack.DASHBOARD,
    component: DashboardStackNavigation,
    icon: "home"
  },
  {
    name: TabScreenNavStack.TRANSACTIONS,
    component: TransactionStackNavigation,
    icon: "compare-arrows"
  },
  {
    name: TabScreenNavStack.SETTING,
    component: Settings,
    icon: "settings"
  },
]

// Dashboard stack screens.
export const DashboardStack = [
  {
    name: DashboardScreenTitles.DASHBOARD,
    component: Onboarding,
  },
  {
    name: DashboardScreenTitles.SCAN,
    component: Scan,
  },
  {
    name: DashboardScreenTitles.QRCODE,
    component: Qrcode,
  },
]

// Transaction stack screens
export const TransactionStacks = [
  {
    name: TranxScreenTitles.HOME,
    component: Transactions,
  },
]