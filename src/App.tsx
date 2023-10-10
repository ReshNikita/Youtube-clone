import { FC, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Login, Loader } from "./components";

const HomePage = lazy(() => import("./components/pages/HomePage"));

const SavedRequestsPage = lazy(
  () => import("./components/pages/SavedRequestsPage")
);

const Registration = lazy(
  () => import("./components/Authorization/Registration")
);

const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));

const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

const AlertError = lazy(() => import("./components/AlertError"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Youtube-clone" element={<Login />} />
      <Route
        path="/register"
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
        path="/Youtube-clone/home"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/Youtube-clone/home/saved"
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
      <Route
        path="error"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => <ErrorPage />}
          >
            <Suspense fallback={<Loader />}>
              <AlertError />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Route>
  )
);

const App: FC = () => <RouterProvider router={router} />;

export default App;
