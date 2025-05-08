import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { addUser, getUser, getUsers } from "./services/User";
import type { User } from "./types";

// Import your actual components here (adjust paths as needed)
import Loading from "./pages/Loading";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";

const App = () => {
  const handleAddUser = async () => {
    const mockUser: User = {
      id: 1,
      username: "test_user",
      ranking: 10,
      points: 100,
      achievements: ["String"],
      isLoggedIn: true,
    };

    await addUser(mockUser);
  };

  const handleGetUsers = async () => {
    const users = await getUsers();
    console.log(users);
  };

  const handleGetUser = async () => {
    const user = await getUser("test_user");
    console.log(user);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </Router>
  );
};

export default App;
