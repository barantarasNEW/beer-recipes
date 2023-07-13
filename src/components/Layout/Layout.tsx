import { Suspense } from "react";
import { Outlet } from "react-router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          {/* <ErrorBoundary> */}
            <Outlet />
          {/* </ErrorBoundary> */}
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Layout;