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
import CreateAccount from "../screens/dashboard/transactions/other-transaction-pages/CreateAccount";
import PayBills from "../screens/dashboard/transactions/other-transaction-pages/PayBills";
import TransactionHistory from "../screens/dashboard/transactions/other-transaction-pages/TransactionHistory";
import Transfer from "../screens/dashboard/home/Transfer";
import ResetPassword from "../screens/dashboard/setting/ResetPassword";
import Notification from "../screens/dashboard/setting/Notification";
import Profile from "../screens/dashboard/user/Profile";

export const authscreens = [
  { id: 1, name: "welcome", component: Welcome },
  {
    id: 2,
    name: "onboarding",
    component: Onboarding,
  },
  { id: 3, name: "registration", component: Registration },
  { id: 2, name: "login", component: Login },
  { id: 4, name: "otp-verification", component: Otp },
  { id: 5, name: "resend-otp", component: ResentOtp },
];

export const onboarding = {
  LOGIN: "login",
  REGISTRATION: "registration",
  OTPVERIFICATION: "otp-verification",
  RESENDOTP: "resend-otp",
};

export const TabScreenNavStack = {
  DASHBOARD: "Home",
  SETTING: "Setting",
  TRANSACTIONS: "Transactions",
  USER: "Profile",
};
export const DashboardScreenTitles = {
  DASHBOARD: "DashboardHome",
  DASHBOARD_RECEIVED: "dashboard_received",
  SCAN: "scan",
  QRCODE: "qrcodescan",
  TRANSFER: "transfer",
};
export const TranxScreenTitles = {
  HOME: "TransactionHome",
  CREATEACCOUNT: "CreateAccount",
  PAYBILL: "PayBill",
  HISTORY: "transactionhistory",
};
export const SettingsScreenTitles = {
  CHANGEPASSWORD: "ResetPassword",
  NOTIFICATION: "Notification",
  LANGUAGE: "Language",
};

export const UserScreenTitles = {
  PROFILE: "Profile",
  NOTIFICATION: "Notification",
};
// bottom tab navigation options
export const TabScreenOptions = [
  {
    id: 1,
    name: TabScreenNavStack.DASHBOARD,
    component: DashboardStackNavigation,
    icon: "home",
  },
  {
    id: 2,
    name: TabScreenNavStack.USER,
    component: Profile,
    icon: "face",
  },
  {
    id: 3,
    name: TabScreenNavStack.TRANSACTIONS,
    component: TransactionStackNavigation,
    icon: "receipt",
  },
  {
    id: 4,
    name: TabScreenNavStack.SETTING,
    component: Settings,
    icon: "settings",
  },
];

// Dashboard stack screens.
export const DashboardStack = [
  { id: 1, name: DashboardScreenTitles.DASHBOARD, component: Onboarding },
  { id: 2, name: DashboardScreenTitles.SCAN, component: Scan },
  { id: 3, name: DashboardScreenTitles.QRCODE, component: Qrcode },
  { id: 4, name: DashboardScreenTitles.TRANSFER, component: Transfer },
];

// Transaction stack screens
export const TransactionStacks = [
  { id: 1, name: TranxScreenTitles.HOME, component: Transactions },
  { id: 2, name: TranxScreenTitles.CREATEACCOUNT, component: CreateAccount },
  { id: 3, name: TranxScreenTitles.PAYBILL, component: PayBills },
  { id: 4, name: TranxScreenTitles.HISTORY, component: TransactionHistory },
];

//Setting stack screens
export const SettingsStack = [
  {
    id: 1,
    name: SettingsScreenTitles.CHANGEPASSWORD,
    component: ResetPassword,
  },
  { id: 2, name: SettingsScreenTitles.NOTIFICATION, component: Notification },
];
//user stack screen
export const ProfileStack = [
  { id: 1, name: UserScreenTitles.PROFILE, component: Profile },
  { id: 2, name: UserScreenTitles.NOTIFICATION, component: Notification },
];
