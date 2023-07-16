import { Suspense, useEffect } from "react";
import { Outlet } from "react-router";

import useRecipeStore from "../../stores/recipes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout = () => {
  const {fetchRecipes} = useRecipeStore(state => state);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Layout;