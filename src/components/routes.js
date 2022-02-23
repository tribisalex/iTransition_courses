import {HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, REVIEW_ROUTE} from "../utils/const";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Review from "../pages/Review";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: LoginPage
  },
  {
    path: REGISTER_ROUTE,
    Element: RegistrationPage
  },
  {
    path: HOMEPAGE_ROUTE,
    Element: HomePage
  },
  {
    path: REVIEW_ROUTE,
    Element: Review
  }
]

export const privateRoutes = [
  {
    path: REVIEW_ROUTE,
    Element: Review
  }
]