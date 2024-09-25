import Navbar from "./components/navbar"; // Ensure the case matches your file system
import MyNewsletters from "./pages/mynewsletters"; // Ensure the case matches your file system
import Home from "./pages/home";
import NewsletterForm from "./pages/create-newsletter";
import SingleNewsletter from "./pages/singleNewsletter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="mynewsletters" element={<MyNewsletters />} />
            <Route path="mynewsletters/create" element={<NewsletterForm />} />
            <Route
              path="mynewsletters/posts/:id"
              element={<SingleNewsletter />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
