import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { SignInUser } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { ListOfBooks } from "./pages/ListOfBooks";
import { BookDetail } from "./pages/BookDetail";

import { NavbarComponent } from "./components/Navbar";
function App() {
  return (
    <>
<NavbarComponent/>
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="book" element={<ListOfBooks />} />
        <Route path="signin" element={<SignInUser />} />
        <Route path="/" element={<Home />} />
        <Route path="/book/view/:bookId" element={<BookDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
