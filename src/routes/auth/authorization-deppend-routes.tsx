/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AuthGuard } from "@/components/route-guards/auth";
import { LogoutGuard } from "@/components/route-guards/logout";
import { AUTH_PATHS } from "./auth.enum";

const ProfileView = lazy(() => import("@/pages/profile/view/profile-view"));
const AuthorizationView = lazy(
  () => import("@/pages/authorization/view/auth-view"),
);
const CreateBlogView = lazy(
  () => import("@/pages/create-blog/view/create-blog-view"),
);

export const AUTH_ROUTES = [
  <Route
    key="user-profile"
    path={AUTH_PATHS.USER_PROFILE}
    element={
      <LogoutGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileView />
        </Suspense>
      </LogoutGuard>
    }
  />,
  <Route
    key="authorization-page"
    path={AUTH_PATHS.AUTHORIZATION_PAGE}
    element={
      <AuthGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthorizationView />
        </Suspense>
      </AuthGuard>
    }
  />,
  <Route
    key="create-blog"
    path={AUTH_PATHS.CREATE_BLOG}
    element={
      <LogoutGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <CreateBlogView />
        </Suspense>
      </LogoutGuard>
    }
  />,
];
