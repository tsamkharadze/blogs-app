import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homeview from "./pages/home/view/homeview";
import DefaultLayout from "./layout/default/default-layout";
import { Suspense } from "react";
import { Authorization } from "./pages/authorization/register-authorize";
import { ThemeProvider } from "./components/theme-provider";

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
              <Route path="signin" element={<Authorization />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
