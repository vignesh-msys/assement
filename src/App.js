import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar/Nav";
import AddNotes from "./modules/addnotes/AddNotes";
import Blog from "./modules/blog/Blog";
import BlogPost from "./modules/blogPost/BlogPost";
import Login from "./modules/login/Login";
import Counter from "./modules/reducerPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BlogPost />} />
        <Route path="/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addnotes" element={<AddNotes />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
