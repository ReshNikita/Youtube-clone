import { FC, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Login, Loader } from "./components";

const SavedRequestsPage = lazy(
  () => import("./components/pages/SavedRequestsPage")
);

const Layout = lazy(() => import("./components/layout/Layout"));

const Registration = lazy(
  () => import("./components/Authorization/Registration")
);

const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));

const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

//path="Youtube-clone"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route
        path="register"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <Registration />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="home"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="home/saved"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <SavedRequestsPage />
              </PrivateRoute>
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="*"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <ErrorPage />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Route>
  )
);

const App: FC = () => <RouterProvider router={router} />;

export default App;
