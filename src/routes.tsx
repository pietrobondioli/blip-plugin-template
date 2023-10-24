import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));
const Notfound = lazy(() => import("@/pages/404"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
