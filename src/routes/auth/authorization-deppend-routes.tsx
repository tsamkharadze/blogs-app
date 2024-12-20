/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AuthGuard } from "@/components/route-guards/auth";
import { LogoutGuard } from "@/components/route-guards/logout";

const ProfileView = lazy(() => import("@/pages/profile/view/profile-view"));
const AuthorizationView = lazy(
  () => import("@/pages/authorization/view/auth-view"),
);
const CreateBlogView = lazy(
  () => import("@/pages/create-blog/view/create-blog-view"),
);

export const AUTH_ROUTES = [
  <Route
    path="profile"
    element={
      <LogoutGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileView />
        </Suspense>
      </LogoutGuard>
    }
  />,
  <Route
    path="authorization"
    element={
      <AuthGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthorizationView />
        </Suspense>
      </AuthGuard>
    }
  />,
  <Route
    path="createBlog"
    element={
      <LogoutGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <CreateBlogView />
        </Suspense>
      </LogoutGuard>
    }
  />,
];
