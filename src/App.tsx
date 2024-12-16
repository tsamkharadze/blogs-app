import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homeview from "./pages/home/view/homeview";
import DefaultLayout from "./layout/default/default-layout";
import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import WriteView from "./pages/write/view/write-view";
import AboutView from "./pages/about/view/about-view";
import AuthorizationView from "./pages/authorization/view/auth-view";
import AuthorView from "./pages/author-page/view/author-view";
import ProfileView from "./pages/profile/view/profile-view";
import { useAtom, useSetAtom } from "jotai";
import { supabase } from "./supabase";
import { avatarAtom, userAtom } from "./store/auth";
import { AuthGuard } from "./components/route-guards/auth";
import { getProfileInfo } from "./supabase/account";
import { LogoutGuard } from "./components/route-guards/logout";
import CreateBlogView from "./pages/create-blog/view/create-blog-view";
import SearchResultView from "./pages/search-result/view/search-result-view";
import SingleBlogView from "./pages/single-blog/view/single-blog-view";

function App() {
  const [user, setUser] = useAtom(userAtom);
  const [isLoading, setIsloading] = useState(true);
  const setUserAvatar = useSetAtom(avatarAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setIsloading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  useEffect(() => {
    if (user)
      getProfileInfo(user.user.id).then((res) =>
        setUserAvatar(res.data?.[0]?.avatar_url || ""),
      );
  });

  if (isLoading) {
    return <div>loading</div>;
  }

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
              <Route path="result" element={<SearchResultView />} />
              <Route path="/blog/:id" element={<SingleBlogView />} />
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
              <Route
                path="createBlog"
                element={
                  <LogoutGuard>
                    <CreateBlogView />
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
