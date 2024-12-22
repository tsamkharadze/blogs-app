/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { DASHBOARD_PATHS } from "./dashboard.enum";

const HomeView = lazy(() => import("@/pages/home/view/homeview"));
const WriteBlogView = lazy(() => import("@/pages/write/view/write-view"));
const AboutView = lazy(() => import("@/pages/about/view/about-view"));
const SingleBlogView = lazy(
  () => import("@/pages/single-blog/view/single-blog-view"),
);
const AuthorView = lazy(() => import("@/pages/author-page/view/author-view"));
const SearchResultView = lazy(
  () => import("@/pages/search-result/view/search-result-view"),
);

export const DASHBOARD_ROUTES = [
  <Route
    key="home-root"
    path="/"
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <HomeView />
      </Suspense>
    }
  />,
  <Route
    key="home-page"
    path={DASHBOARD_PATHS.HOME_PAGE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <HomeView />
      </Suspense>
    }
  />,
  <Route
    key="write-blog"
    path={DASHBOARD_PATHS.WRITE_BLOG}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <WriteBlogView />
      </Suspense>
    }
  />,
  <Route
    key="about-page"
    path={DASHBOARD_PATHS.ABOUT_PAGE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AboutView />
      </Suspense>
    }
  />,
  <Route
    key="view-blog"
    path={DASHBOARD_PATHS.VIEW_BLOG + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <SingleBlogView />
      </Suspense>
    }
  />,
  <Route
    key="blog-author"
    path={DASHBOARD_PATHS.BLOG_AUTHOR}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthorView />
      </Suspense>
    }
  />,
  <Route
    key="search-result"
    path="result"
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResultView />
      </Suspense>
    }
  />,
];
