import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./Home"));
const Talents = lazy(() => import("./TalentsPage"));
const PalestineTalent = lazy(() => import("./PalestineTalent"));
const Login = lazy(() => import("./login"));
const Events = lazy(() => import("./EventsPage"));
const Event = lazy(() => import("./Event/Event"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const SERVER_BASE_DEV = "http://localhost:3001";
const SERVER_BASE_PROD = "https://paltalents-server.azurewebsites.net";

import {
  createMuiTheme,
  ThemeProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { VscLoading } from "react-icons/vsc";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#737373",
    },
    background: {
      default: "#35383e",
    },
  },
});

function App() {
  let BASE_URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? SERVER_BASE_DEV
      : SERVER_BASE_PROD;

  // TODO: Remove this
  fetch(`${BASE_URL}/api/v1/hello`)
    .then((result) => result.json())
    .then((body) => {
      console.log(body.Message);
    });

  return (
    <div className="App">
      <Navbar isAuth={true} />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
      <Suspense
        fallback={
          <div>
            Loading...
            <br />
            <VscLoading />
          </div>
        }
      >
        <Switch>
          <ThemeProvider theme={theme}>
            <Route path="/login" component={Login} exact />
            <Route path="/Talents" component={Talents} exact />
            <Route path="/Events" component={Events} exact />
            <Route path="/" component={PalestineTalent} exact />
            <Route path="/Home" component={Home} exact />
            <Route path="/Event" component={Event} exact />
            <Route path="/Resetpassword" component={ResetPassword} exact />
          </ThemeProvider>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
