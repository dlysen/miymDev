import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import HomeLayout from "./pages/HomeLayout.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeLayout />} />
          {/* Background variants render the same layout; the switcher sets the mode. */}
          <Route path="/home-video" element={<HomeLayout />} />
          <Route path="/home-particles" element={<HomeLayout />} />
          <Route path="/home-bgcolor" element={<HomeLayout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
