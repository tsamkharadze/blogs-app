import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homeview from "./pages/home/view/homeview";
import DefaultLayout from "./layout/default/default-layout";
import { Suspense, useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import WriteView from "./pages/write/view/write-view";
import AboutView from "./pages/about/view/about-view";
import AuthorizationView from "./pages/authorization/view/auth-view";
import AuthorView from "./pages/author-page/view/author-view";
import ProfileView from "./pages/profile/view/profile-view";
import { useSetAtom } from "jotai";
import { supabase } from "./supabase";
import { userAtom } from "./store/auth";
import { AuthGuard, LogoutGuard } from "./components/route-guards/auth";

function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

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
              <Route
                path="authorization"
                element={
                  <AuthGuard>
                    <AuthorizationView />
                  </AuthGuard>
                }
              />
              <Route path="author" element={<AuthorView />} />{" "}
              <Route
                path="profile"
                element={
                  <LogoutGuard>
                    <ProfileView />
                  </LogoutGuard>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
