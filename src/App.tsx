import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homeview from "./pages/home/view/homeview";
import DefaultLayout from "./layout/default/default-layout";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import AuthView from "./pages/authorization/view/auth-view";
import WriteView from "./pages/write/view/write-view";
import AboutView from "./pages/about/view/about-view";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-white dark:bg-black">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Homeview />
                  </Suspense>
                }
              />
              <Route path="home" element={<Homeview />} />
              <Route path="write" element={<WriteView />} />
              <Route path="about" element={<AboutView />} />
              <Route path="auth" element={<AuthView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
