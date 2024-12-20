import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useAtom, useSetAtom } from "jotai";
import { supabase } from "./supabase";
import { avatarAtom, userAtom } from "./store/auth";
import { getProfileInfo } from "./supabase/account";
import { AllRoutes } from "./routes/all-routes";

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
        <AllRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
