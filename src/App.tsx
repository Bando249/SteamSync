import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import FriendsPage from "./pages/FriendsPage";
import AccountPage from "./pages/AccountPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
