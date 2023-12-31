import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import HikeById from "./components/HikeById";
import Favorites from "./components/Favorites";

const App = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header
        user={user}
        isAuthenticated={isAuthenticated}
        login={loginWithRedirect}
        logout={logout}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/hike/:hikeId"
          element={<HikeById />}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>          
    </BrowserRouter>
  )
};

export default App;
